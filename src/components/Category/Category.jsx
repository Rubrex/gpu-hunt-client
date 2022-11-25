import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <h2 className="text-2xl">Category</h2>
    </div>
  );
};

export default Category;
