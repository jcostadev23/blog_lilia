"use client";
import allData from "../storage/allData";
import Details from "./Details";
import Image from "next/image";

const WorkPicture = () => {
  return (
    <>
      <h2 className="flex text-xl font-bold items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600 m-10">
        Alguns dos meus trabalhos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        {allData.map((data) => (
          <a
            className="flex flex-col no-underline bg-white rounded-lg overflow-hidden shadow-lg "
            key={data.id}
            href={`/users/${data.id}`}
          >
            <Image
              className="object-cover w-full h-full transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4"
              src={data.image1}
              width={160}
              height={160}
              alt={"work picture"}
            />
            <Details details={data.details} />
          </a>
        ))}
      </div>
    </>
  );
};

export default WorkPicture;
