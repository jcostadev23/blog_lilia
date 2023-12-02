import React from "react";

interface Props {
  details: String;
}

const Details: React.FC<Props> = (props) => {
  return (
    <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
      {props.details}
    </p>
  );
};

export default Details;
