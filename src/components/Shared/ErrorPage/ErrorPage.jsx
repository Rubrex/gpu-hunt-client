import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import styles from "./ErrorPage.module.css";

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
    <section className={`${styles.page_404} mt-10`}>
      <h1 className="text-3xl text-center font-bold">Something Went Wrong</h1>

      <section className={`${styles.errorContainer}`}>
        <span className={styles.four}>
          <span className={styles.screenReaderText}>4</span>
        </span>
        <span className={styles.zero}>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span className={styles.four}>
          <span className={styles.screenReaderText}>4</span>
        </span>
      </section>
      <p className={styles.zoomArea}>
        <b className="text-xl py-2 px-4 border-2 border-primary text-primary uppercase">
          {error.statusText}{" "}
        </b>
      </p>
      <div className={styles.linkContainer}>
        <Link to="/" className={`${styles.moreLink} bg-primary`}>
          Visit Home Page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
