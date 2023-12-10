import React from "react";
import Loader from "./Loader";

const ErrorPage = () => {
  return (
    <div className="error-page m-20">
      <h2 className="flex text-xl text-red-600 font-bold items-center justify-center">
        Error 404...
      </h2>
      <p className="flex text-lg text-red-400 font-bold items-center justify-center">
        Page in construction...
      </p>
      <Loader />
    </div>
  );
};

export default ErrorPage;
