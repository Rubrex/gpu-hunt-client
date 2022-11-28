import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ bookingInfo }) => {
  // State
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, customer, _id } = bookingInfo;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${import.meta.env.VITE_API}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("gpuhunt_token"),
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error);
    } else {
      setCardError("");
    }

    setSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customer,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log("paymentIntent: ", paymentIntent);

      console.log("cart info", card);
      // Store payments data to db
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("https://doctors-portal-server-azure.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + localStorage.getItem("doctors_token"),
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! Your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-secondary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          {loading ? "Processing..." : "PAY"}
        </button>
      </form>
      <p className="text-red-500">{cardError.message}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your TransactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
