import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import useSellers from "../../hooks/useSellers";

const SellersRoute = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSellers(user?.email);
  const location = useLocation();

  if (isLoading || isSellerLoading) {
    return <Loading />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellersRoute;
