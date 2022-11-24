import React from "react";
import "./loader.css";

const Loading = () => {
  return (
    <center className="mt-10">
      <div className="loader rspin">
        <span className="c"></span>
        <span className="d spin">
          <span className="e"></span>
        </span>
        <span className="r r1"></span>
        <span className="r r2"></span>
        <span className="r r3"></span>
        <span className="r r4"></span>
      </div>
    </center>
  );
};

export default Loading;
