import { Modal } from "flowbite-react";
import React, { useContext } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TiTick } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../../contexts/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BooknowConfirmModal = ({ showModal, onClose, modalProduct }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // get displayName, user email from context api

  //   Get Seller Info
  const {
    _id,
    productImage,
    productName,
    productPrice,
    productDescription,
    productCondition,
    sellerName,
    sellerImage,
    sellerPhone,
    sellerEmail,
    sellerVerified,
    sellerLocation,
    addedDate,
    purchaseDate,
    marketPrice,
    paid,
    advertised,
  } = modalProduct;

  //   On submit
  const onSubmit = (event) => {
    event.preventDefault();
    const cellNumber = event.target.cellNumber.value;
    const meetLocation = event.target.meetLocation.value;
    // Submit Order / Booking
    const order = {
      buyerEmail: user?.email,
      productId: _id,
      productImage,
      productName,
      productPrice,
      cellNumber,
      meetLocation,
      paid,
    };
    // Submit to DB
    const orderUrl = import.meta.env.VITE_API + "/orders";
    axios
      .post(orderUrl, order)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Order Placed");
          navigate("/dashboard/myorders");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(order);
    // Close Modal
    onClose();
    return;
  };

  return (
    <Modal show={showModal} onClose={onClose}>
      <form onSubmit={onSubmit} className="relative">
        {/* <Modal.Header>Terms of Service</Modal.Header> */}
        <Modal.Body>
          <div className="absolute -top-2 -right-2">
            <PrimaryButton onClick={onClose}>X</PrimaryButton>
          </div>
          <div className="space-y-6">
            {/* Product Image and info */}
            <div className="grid grid-cols-2 bg-gray-100 p-2 my-1 rounded-md">
              {/* Text Description */}
              <div className="p-2 text-sm flex  mr-2 rounded-md flex-col justify-between">
                <p>Original Price: {marketPrice}</p>

                <p>Purchased on: {purchaseDate}</p>
                <p>Condition: {productCondition}</p>
                <p>Description: {productDescription}</p>
              </div>
              {/* Product Image */}
              <div>
                <PhotoProvider>
                  <PhotoView src={productImage}>
                    {/* Product Image */}
                    <img
                      className="max-h-[120px] lg:max-h-[150px] w-full object-cover mb-5 rounded-md "
                      src={productImage}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
                <h2 className="text-xl font-medium">{productName}</h2>
                <p>
                  Price: $
                  <span className="text-xl font-bold">{productPrice}</span>
                </p>
              </div>
            </div>

            {/* Seller & Buyers Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                {/* Seller Info */}
                <h1 className="text-3xl font-light mb-4">Seller Info</h1>
                <p className="font-medium text-bgColor flex items-center ">
                  {sellerName}{" "}
                  {sellerVerified && (
                    <span>
                      <TiTick className="p-[2px] text-blue-600 bg-gray-200 ml-2 rounded-full  text-lg" />
                    </span>
                  )}
                </p>
                <p>Email: {sellerEmail}</p>
                <p>Cell Number: {sellerPhone}</p>
                <p>Location: {sellerLocation}</p>
              </div>

              <div>
                {/* Buyer Info */}
                <h1 className="text-3xl font-light mb-4">Buyer Info</h1>
                <p className="font-medium text-bgColor flex items-center ">
                  {user?.displayName}
                </p>
                <p>Email: {user?.email}</p>
                <div className="grid grid-cols-6 items-center">
                  <label
                    htmlFor="cellNumber"
                    className="font-medium mb-2 text-sm col-span-2"
                  >
                    Cell Number:
                  </label>
                  <input
                    id="cellNumber"
                    type="text"
                    name="cellNumber"
                    className="py-1 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 col-span-4 "
                    required
                  />
                </div>
                <div className="grid grid-cols-6 items-center">
                  <label
                    htmlFor="meetLocation"
                    className="font-medium mb-2 text-sm col-span-2"
                  >
                    Meeting Location:
                  </label>
                  <input
                    id="meetLocation"
                    type="text"
                    name="meetLocation"
                    required
                    className="py-1 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 col-span-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton type="submit">Confirm Booking</PrimaryButton>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default BooknowConfirmModal;
