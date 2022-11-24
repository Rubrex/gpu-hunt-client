import React from "react";
import { TiTick } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";
import priceTagImage from "../../../assets/images/icons/priceTag.png";
import defaultProfileImage from "../../../assets/images/icons/profile.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ProductCard = ({ productDetails }) => {
  console.log(productDetails);
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
  } = productDetails;

  const shortenDesc = (text) => {
    return text.slice(0, 80);
  };

  return (
    <div className="justify-self-center">
      {/* Card */}
      <div className="border p-2 lg:p-3 rounded-md min-w-[200px] lg:min-w-[270px]">
        {/* Photo + Price Tag */}
        <div className="relative">
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
          <div className="absolute top-1 right-0 ">
            <div className="flex justify-center items-center">
              <img className="w-20 -mr-[3px]" src={priceTagImage} />
              <span className="absolute text-white font-bold">
                ${productPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="text-sm md:text-base">
          {/* Profile image, name, added on */}
          <div className="flex items-center gap-4">
            <img
              src={sellerImage ? sellerImage : defaultProfileImage}
              className="max-w-[30px] lg:max-w-[45px] rounded-md"
              alt="user image"
            />
            <div>
              <p className="font-medium text-bgColor flex items-center">
                {sellerName}{" "}
                {sellerVerified && (
                  <span>
                    <TiTick className="p-[2px] text-blue-600 bg-gray-200 ml-2 rounded-full  text-lg" />
                  </span>
                )}
              </p>
              <span className="text-slate-600 text-sm">
                <small>Added on: {addedDate}</small>
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-lg lg:text-lg font-medium my-2">{productName}</h3>
          <div className="text-sm">
            <p>
              Condition:{" "}
              <span className=" text-green-600 font-medium">
                {productCondition}
              </span>
            </p>
            <p>Market Price: ${marketPrice}</p>
            <p>Purchased: {purchaseDate}</p>
            <p>Location: {sellerLocation}</p>
            <p className="bg-gray-100 p-2 my-1 rounded-md">
              <span className="font-medium">Description:</span>{" "}
              {shortenDesc(productDescription)} ...
            </p>
          </div>

          {/* Booking , wishlist, report admin */}
          <div className="flex justify-between mt-5">
            <PrimaryButton>BookNow</PrimaryButton>
            <PrimaryButton>Cart</PrimaryButton>
            <PrimaryButton>Report</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
