import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
import { AuthContext } from "./AuthProvider";

export const RoleContext = createContext();

const ProductProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [role, roleLoading] = useRole(user?.email);
  if (roleLoading) {
    return <Loading />;
  }

  const info = { role };
  return <RoleContext.Provider value={info}>{children}</RoleContext.Provider>;
};

export default ProductProvider;
