import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
import { AuthContext } from "./AuthProvider";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [role, roleLoading] = useRole(user?.email);

  if (roleLoading) {
    return <Loading />;
  }

  const info = { role };
  return (
    <ProductContext.Provider value={info}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
