import React from "react";
import { useState } from "react";

interface Props {
  params: {
    main: string;
  };
  onChange: (value: string) => void;
}

const ShowWorks: React.FC<Props> = ({ params }) => {
  const [sehowMyPages, setSehowMyPages] = useState(false);

  const handleClick = () => {
    setSehowMyPages(!sehowMyPages);
  };

  return (
    <div>
      <h1>Works!! ID: {params.main}</h1>

      <button onClick={handleClick}>Show Picture</button>
    </div>
  );
};

export default ShowWorks;
