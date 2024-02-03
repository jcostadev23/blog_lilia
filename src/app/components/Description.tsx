import React from "react";

interface Props {
  description: string;
}
const Description: React.FC<Props> = (props) => {
  return (
    <p className="text-lg text-gray-800 font-semibold text-center p-6 leading-7">
      {props.description}
    </p>
  );
};

export default Description;
