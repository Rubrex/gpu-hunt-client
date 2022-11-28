import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = (bookingInfo) => {
  const { price, item } = bookingInfo;
  return (
    <section className="bg-[#F1F5F9] px-14 py-7 min-h-screen">
      <h2 className="text-3xl">Payment for {item}</h2>
      <p className="text-xl">
        Pay <strong>${price}</strong> For {item}
      </p>
      <div className="mt-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingInfo={bookingInfo} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
