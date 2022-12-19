import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../../components/Shared/Loading/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import { RoleContext } from "../../contexts/ProductProvider";

const SellersRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(RoleContext);
  const location = useLocation();
  // console.log("sellerRoute", role);

  if (user && role === "seller") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellersRoute;
