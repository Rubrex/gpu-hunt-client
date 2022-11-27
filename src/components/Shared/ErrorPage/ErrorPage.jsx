import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./ErrorPage.css";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);

  const error = useRouteError();
  console.log(error);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="page_404 mt-10">
      <h1 className="text-3xl">Something Went Wrong</h1>

      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <p className="zoom-area">
        <b className="text-xl">{error.statusText} </b>
      </p>
      <div className="link-container ">
        <Link to="/" className="more-link bg-primary">
          Visit Home Page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
