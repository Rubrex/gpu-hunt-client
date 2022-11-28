import React, { useContext } from "react";
import { TiTick } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";
import priceTagImage from "../../../assets/images/icons/priceTag.png";
import defaultProfileImage from "../../../assets/images/icons/profile.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { BsBookmarkCheck, BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { format } from "date-fns";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductProvider";

const ProductCard = ({ productInfo, setShowModal, setModalProduct }) => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(ProductContext);

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
    verified,
    sellerLocation,
    postAdded,
    purchaseDate,
    marketPrice,
    sold,
    advertised,
  } = productInfo;

  const formatedDate = format(new Date(parseInt(postAdded)), "PP");

  const openBookingModal = () => {
    setShowModal();
    setModalProduct(productInfo);
  };

  const shortenDesc = (text) => {
    return text.slice(0, 70);
  };

  // Report to admin
  const handleReportAdmin = (email, productId, productName) => {
    const url = `${import.meta.env.VITE_API}/reports`;
    axios
      .put(url, {
        email,
        productId,
        productName,
        reason: "This seller is fraud",
      })
      .then((resposnse) => {
        console.log(resposnse.data);
      });
  };

  return (
    <div className="justify-self-center ">
      {/* Card */}
      <div className="border p-2 hover:shadow-lg transition-all duration-300  lg:p-3 rounded-md min-w-[200px] lg:min-w-[270px]">
        {/* Photo + Price Tag */}
        <div className="relative">
          <PhotoProvider>
            <PhotoView src={productImage}>
              {/* Product Image */}
              <img
                className="h-[150px] w-full object-cover mb-5 rounded-md "
                src={productImage}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <div className="absolute top-1 right-0 ">
            <div className="flex justify-center items-center">
              <img className="w-20 -mr-[3px]" src={priceTagImage} />
              <p className="absolute text-white ">
                $<span className="text-xl font-semibold">{productPrice}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="text-sm md:text-base">
          {/* Profile image, name, added on */}
          <div className="flex items-center gap-4">
            <img
              src={sellerImage ? sellerImage : defaultProfileImage}
              className="w-11 h-11 object-cover rounded-md"
              alt="user image"
            />
            <div>
              <p className="font-medium text-bgColor flex items-center ">
                {sellerName}{" "}
                {verified && (
                  <span>
                    <TiTick className="p-[2px] text-blue-600 bg-gray-200 ml-2 rounded-full  text-lg" />
                  </span>
                )}
              </p>
              <span className="text-slate-600 text-sm">
                <small>Added on: {formatedDate}</small>
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-lg lg:text-lg font-medium my-2 ">
            {productName}
          </h3>
          <div className="text-sm relative">
            {/*  Report to admin */}
            <div className="absolute top-0 right-0">
              {role ? (
                <Tooltip content="Report to admin" placement="left">
                  <button
                    onClick={() =>
                      handleReportAdmin(user?.email, _id, productName)
                    }
                  >
                    <MdReport className="text-4xl bg-gray-100 hover:bg-orange-100 rounded-md p-2 text-primary" />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip content="Login to report" placement="left">
                  <button disabled>
                    <MdReport className="text-4xl bg-gray-300  rounded-md p-2 text-white" />
                  </button>
                </Tooltip>
              )}
            </div>
            <p>
              Condition:{" "}
              <span className=" text-green-600 font-medium">
                {productCondition}
              </span>
            </p>
            <p>Market Price: ${marketPrice}</p>
            <p>Purchased: {purchaseDate}</p>
            <p>Location: {sellerLocation}</p>
            <p className="bg-gray-100 p-2 my-1 rounded-md min-h-[76px]">
              <span className="font-medium">Description:</span>{" "}
              {shortenDesc(productDescription)} ...
            </p>
          </div>

          {/* Booking , wishlist */}
          <div className="flex justify-between mt-5">
            {role === "seller" || role === "admin" ? (
              <PrimaryButton disabled className="active:bg-gray-500">
                BookNow
              </PrimaryButton>
            ) : role === false ? (
              <Link to="/login">
                <PrimaryButton>BookNow</PrimaryButton>
              </Link>
            ) : (
              <PrimaryButton onClick={openBookingModal}>BookNow</PrimaryButton>
            )}

            <button>
              <Tooltip content="Add to wishlist" placement="top">
                {(
                  <BsBookmarkCheck className="text-4xl bg-gray-100 hover:bg-orange-100 rounded-md p-2 text-primary" />
                ) || (
                  <BsFillBookmarkCheckFill className="text-4xl bg-gray-100 hover:bg-orange-100 rounded-md p-2 text-primary" />
                )}
              </Tooltip>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
