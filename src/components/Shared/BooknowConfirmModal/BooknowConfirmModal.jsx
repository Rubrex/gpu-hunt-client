import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { TiTick } from "react-icons/ti";

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
      <form onSubmit={onSubmit}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {/* Product Image and info */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text Description */}
              <div className="bg-gray-100 p-2 my-1 rounded-md">
                <h2 className="text-xl font-medium">{productName}</h2>
                <p>Original Price: {marketPrice}</p>
                <p>Resell Price: {productPrice}</p>
                <p>Purchased on: {purchaseDate}</p>
                <p>Condition: {productCondition}</p>
                <p>Description: {productDescription}</p>
              </div>
              {/* Product Image */}
              <img src={productImage} className="rounded-md" alt="" />
            </div>
            {/* Seller Info */}
            <h1 className="text-4xl font-light">Seller Info</h1>
            <p className="font-medium text-bgColor flex items-center ">
              {sellerName}{" "}
              {sellerVerified && (
                <span>
                  <TiTick className="p-[2px] text-blue-600 bg-gray-200 ml-2 rounded-full  text-lg" />
                </span>
              )}
            </p>
            <p>Contact Number: {sellerPhone}</p>
            <p>Contact Email: {sellerEmail}</p>
            <p>Location: {sellerLocation}</p>

            {/* Buyer Info */}
            <h1 className="text-4xl font-light">Buyer Info</h1>
            <p>Your Name: Rubel Hossain</p>
            <p>Your Email: rubel@hossail.com</p>
            <p>Your Contact Number: +8801980728221</p>
            <p>Meeting Location: NorthBadda</p>
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
