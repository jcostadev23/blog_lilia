import React from "react";

interface Props {
  name: string;
}

const Name: React.FC<Props> = (props) => {
  return (
    <h2 className="text-lg text-gray-950 font-bold text-center leading-7 mt-4">
      {props.name}
    </h2>
  );
};

export default Name;
