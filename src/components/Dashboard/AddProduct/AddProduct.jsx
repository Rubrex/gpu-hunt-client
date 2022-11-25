import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import SmallLoading from "../../Shared/SmallLoading/SmallLoading";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const url = import.meta.env.VITE_API + "/users/verified/" + user?.email;
    axios.get(url).then((res) => setIsVerified(res.data));
  }, [user]);

  const epoch = (date) => {
    return Date.parse(date);
  };
  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData();
    //   IMAGEBB API KEY
    const imagehostkey = import.meta.env.VITE_IMGBB_KEY;
    // Upload image
    const url = `https://api.imgbb.com/1/upload?&key=${imagehostkey}`;
    formData.append("image", data.productImage[0]);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imageLink = imgData.data.url;
          const finalData = {
            productName: data.productName,
            productPrice: data.productPrice,
            marketPrice: data.marketPrice,
            productImage: imageLink,
            purchaseDate: data.purchaseDate,
            productCategory: data.productCategory,
            productCondition: data.productCondition,
            productDescription: data.productDesc,
            sellerName: data.sellerName,
            sellerImage: user?.photoURL,
            sellerEmail: data.sellerEmail,
            sellerPhone: data.sellerPhone,
            sellerLocation: data.sellerLocation,
            sellerVerified: isVerified,
            postAdded: epoch(new Date()),
            paid: false,
            advertised: false,
          };

          // Update data to db
          const createUrl = import.meta.env.VITE_API + "/products";
          axios.post(createUrl, finalData).then((res) => {
            if (res.data.acknowledged) {
              reset();
              setLoading(false);
              toast.success("Product added successfully");
            }
          });
        }
      });
  };
  return (
    <div className="p-2 md:p-5">
      <h2 className="text-xl  mb-10 pl-2 border-l-4 border-primary ">
        Add Product
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-800">
          {/* product name */}
          <div className="flex flex-col ">
            <label htmlFor="productName" className="font-medium mb-2 text-sm">
              Product Name
            </label>
            <input
              id="productName"
              className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50  ${
                errors.productName
                  ? "ring-2 ring-primary"
                  : "focus:ring-2 ring-secondary"
              }`}
              {...register("productName", { required: true })}
            />

            {errors.productName ? (
              <span className="text-primary my-1">This field is required</span>
            ) : (
              <span className="py-2"></span>
            )}
          </div>

          {/* Price and market price */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            {/* product price */}
            <div className="flex flex-col ">
              <label
                htmlFor="productPrice"
                className="font-medium mb-2 text-sm"
              >
                Product Price
              </label>
              <input
                id="productPrice"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 ${
                  errors.productPrice
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("productPrice", { required: true })}
              />

              {errors.productPrice ? (
                <span className="text-primary my-1">
                  This field is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
            {/* product market price */}
            <div className="flex flex-col ">
              <label htmlFor="marketPrice" className="font-medium mb-2 text-sm">
                Market Price
              </label>
              <input
                id="marketPrice"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 ${
                  errors.marketPrice
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("marketPrice", { required: true })}
              />

              {errors.marketPrice ? (
                <span className="text-primary my-1">
                  This field is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
          </div>

          {/* Image and purchase date */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            {/* Product Image */}
            <div className="flex flex-col ">
              <label
                htmlFor="purchaseDate"
                className="font-medium mb-2 text-sm"
              >
                Upload Your Profile Picture
              </label>
              <input
                className=" w-full text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 dark:text-gray-400 outline-none rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="productImage"
                type="file"
                {...register("productImage", { required: true })}
              />
              {errors.productImage ? (
                <span className="text-primary my-1">
                  Product image is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
            {/* Purchase Date */}
            <div className="flex flex-col ">
              <label
                htmlFor="purchaseDate"
                className="font-medium mb-2 text-sm"
              >
                Purchase Date
              </label>
              <input
                id="purchaseDate"
                type="date"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 ${
                  errors.purchaseDate
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("purchaseDate", { required: true })}
              />

              {errors.purchaseDate ? (
                <span className="text-primary my-1">
                  This field is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
          </div>

          {/* Category and Condition */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            {/* Product Category */}
            <div className="flex flex-col ">
              <label
                htmlFor="productCategory"
                className="font-medium mb-2 text-sm"
              >
                Product Category
              </label>

              <select
                id="productCategory"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50  ${
                  errors.productCategory
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("productCategory", {
                  required: "Please select an option",
                })}
              >
                <option value="">Select...</option>
                <option value="GTX Series">GTX Series</option>
                <option value="RTX Series">RTX Series</option>
                <option value="RADEON Series">RADEON Series</option>
              </select>

              {errors.productCategory ? (
                <span className="text-primary my-1">
                  {errors.productCategory.message}
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>

            {/* Product Condition */}
            <div className="flex flex-col ">
              <label
                htmlFor="productCondition"
                className="font-medium mb-2 text-sm"
              >
                Product Condition
              </label>

              <select
                id="productCondition"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50  ${
                  errors.productCondition
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("productCondition", {
                  required: "Please select an option",
                })}
              >
                <option value="">Select...</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>

              {errors.productCondition ? (
                <span className="text-primary my-1">
                  {errors.productCondition.message}
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
          </div>

          {/* Product Description */}
          <div className="flex flex-col ">
            <label htmlFor="productDesc" className="font-medium mb-2 text-sm">
              Description
            </label>
            <textarea
              id="productDesc"
              placeholder="Leave a comment..."
              rows={4}
              className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50  ${
                errors.productDesc
                  ? "ring-2 ring-primary"
                  : "focus:ring-2 ring-secondary"
              }`}
              {...register("productDesc", { required: true })}
            />

            {errors.productDesc ? (
              <span className="text-primary my-1">This field is required</span>
            ) : (
              <span className="py-2"></span>
            )}
          </div>

          {/* SELLERS name and email */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-4">
            {/* Seller name */}
            <div className="flex flex-col ">
              <label htmlFor="sellerName" className="font-medium mb-2 text-sm">
                Your Name
              </label>
              <input
                id="sellerName"
                disabled
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-200`}
                {...register("sellerName", { value: user?.displayName })}
              />
            </div>
            {/* Seller Email */}
            <div className="flex flex-col ">
              <label htmlFor="sellerEmail" className="font-medium mb-2 text-sm">
                Your Name
              </label>
              <input
                id="sellerEmail"
                disabled
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-200`}
                {...register("sellerEmail", { value: user?.email })}
              />
            </div>
          </div>
          {/* SELLERS phone and location */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            {/* Seller phone number */}
            <div className="flex flex-col ">
              <label htmlFor="sellerPhone" className="font-medium mb-2 text-sm">
                Your Phone Number
              </label>
              <input
                id="sellerPhone"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 ${
                  errors.sellerPhone
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("sellerPhone", { required: true })}
              />

              {errors.sellerPhone ? (
                <span className="text-primary my-1">
                  This field is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
            {/* Seller Email */}
            <div className="flex flex-col ">
              <label
                htmlFor="sellerLocation"
                className="font-medium mb-2 text-sm"
              >
                Your Location (e.g. North Badda, Dhaka)
              </label>
              <input
                id="sellerLocation"
                className={`py-2 px-3 outline-none rounded-lg border border-gray-300  cursor-pointer bg-gray-50 ${
                  errors.sellerLocation
                    ? "ring-2 ring-primary"
                    : "focus:ring-2 ring-secondary"
                }`}
                {...register("sellerLocation", { required: true })}
              />

              {errors.sellerLocation ? (
                <span className="text-primary my-1">
                  This field is required
                </span>
              ) : (
                <span className="py-2"></span>
              )}
            </div>
          </div>

          <PrimaryButton>
            {loading ? <SmallLoading /> : "Add Product"}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
