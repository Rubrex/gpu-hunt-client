import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading/Loading";
import { AuthContext } from "../../contexts/AuthProvider";
import useUser from "../../hooks/useUsers";

const UsersRoute = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);
  const [isUser, isUserLoading] = useUser(user?.email);
  const location = useLocation();

  if (isLoading || isUserLoading) {
    return <Loading />;
  }

  if (user && isUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UsersRoute;
