import React, { FC } from "react";
import ErrorPage from "../components/ErrorPage";
import SlidePicture from "../components/Slide";

const errorPage: FC = ({}) => {
  return (
    <>
      <ErrorPage />
      <SlidePicture />
    </>
  );
};
export default errorPage;
