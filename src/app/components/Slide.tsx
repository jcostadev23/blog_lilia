"use client";
import Image from "next/image";
import allData from "../storage/allData";
import { useEffect, useState } from "react";

const SlidePicture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden ml-10">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {allData.map((data) => (
          <div className="flex-shrink-0 w-full" key={data.id}>
            <div key={data.id} className="aspect-w-3 aspect-h-4">
              <Image
                className="transition-transform transform-origin-start opacity-90 transform 
            rounded mt-4"
                src={data.image1}
                width={200}
                height={250}
                alt={"work picture"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePicture;
