import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitle";
import BooknowConfirmModal from "../Shared/BooknowConfirmModal/BooknowConfirmModal";
import NoProductsFound from "../Shared/NoProductsFound/NoProductsFound";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Products = () => {
  // State
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const productDetails = useLoaderData();

  console.log(productDetails);
  // Handle Modal
  const onClose = () => {
    console.log("Modal triggered");
    setShowModal(false);
  };

  useTitleChange(productDetails[0]?.productCategory);

  if (productDetails.length === 0) {
    return <NoProductsFound />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold my-10  pl-2 border-l-4 border-primary">
        All Products
      </h2>
      {/* Display Products */}
      <section className="mb-32 mt-10">
        {/* Categories  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {productDetails &&
            productDetails?.map((eachProduct) => (
              <ProductCard
                key={eachProduct._id}
                setShowModal={() => setShowModal(!showModal)}
                productInfo={eachProduct}
                setModalProduct={(modalProduct) =>
                  setModalProduct(modalProduct)
                }
              />
            ))}
        </div>
        {/* Show Modal */}
        <BooknowConfirmModal
          modalProduct={modalProduct}
          showModal={showModal}
          onClose={onClose}
        />
      </section>
    </div>
  );
};

export default Products;
