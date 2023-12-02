"use client";
import Image from "next/image";
import allData from "../storage/allData";
import Details from "./Details";

const WorkPicture = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 m-4">
      {allData.map((data) => (
        <a
          className="flex flex-col mx-auto items-center justify-center no-underline"
          key={data.id}
          href={`/users/${data.id}`}
        >
          <div className="aspect-w-3 aspect-h-4">
            <Image
              className="transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4"
              src={data.image1}
              width={160}
              height={200}
              alt={"work picture"}
            />
          </div>
          <Details details={data.details} />
        </a>
      ))}
    </div>
  );
};

export default WorkPicture;
