import React from "react";
import { useState } from "react";

interface Props {
  params: {
    main: string;
  };
  onChange: (value: string) => void;
}

const ShowWorks: React.FC<Props> = ({ params }) => {
  const [showMyPages, setShowMyPages] = useState(false);

  const handleClick = () => {
    setShowMyPages(!showMyPages);
  };

  return (
    <div>
      <h1>Works!! ID: {params.main}</h1>

      <button onClick={handleClick}>Show Picture</button>
    </div>
  );
};

export default ShowWorks;
