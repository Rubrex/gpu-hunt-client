import { Modal } from "flowbite-react";
import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TiTick } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";

const BooknowConfirmModal = ({ showModal, onClose, modalProduct }) => {
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
    sold,
    advertised,
  } = modalProduct;

  //   On submit
  const onSubmit = (event) => {
    event.preventDefault();
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
            <PrimaryButton>X</PrimaryButton>
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
                <h1 className="text-3xl font-light">Seller Info</h1>
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
                <h1 className="text-3xl font-light">Buyer Info</h1>
                <p className="font-medium text-bgColor flex items-center ">
                  Rubel Hossain
                </p>
                <p>Email: rubel@hossail.com</p>
                <p>Cell Number: +8801980728221</p>
                <p>Meeting Location: NorthBadda</p>
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
