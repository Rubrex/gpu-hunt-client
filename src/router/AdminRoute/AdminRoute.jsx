import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import { RoleContext } from "../../contexts/ProductProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(RoleContext);
  const location = useLocation();

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
