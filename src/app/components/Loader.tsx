import React from "react";

interface Props {
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<Props> = ({ size = "large" }) => {
  const getSizeClassName = () => {
    switch (size) {
      case "small":
        return "h-4 w-4";
      case "large":
        return "h-20 w-20";
      default:
        return "h-6 w-6";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`loader ${getSizeClassName()}`}>
        <div className="relative w-full h-full transform rotate-45 mt-20">
          <div className="absolute w-full h-full bg-pink-500 animate-ping rounded-full"></div>
          <div className="absolute w-2/5 h-2/5 bg-pink-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
