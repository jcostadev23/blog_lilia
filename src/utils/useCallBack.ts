"use client";
import { useState } from "react";

const useMyCallBack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    callBack: () => setIsOpen(!isOpen),
  };
};

export default useMyCallBack;
