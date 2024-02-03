"use client";
import Image from "next/image";
import allData from "../storage/allData";
import Details from "./Details";

const WorkPicture = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {allData.map((data) => (
          <a
            className="flex flex-col no-underline bg-transparent rounded-lg overflow-hidden shadow-lg "
            key={data.id}
            href={`/users/${data.id}`}
          >
            <Image
              className="object-cover w-full h-full transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out"
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
