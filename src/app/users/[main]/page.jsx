import React from "react";
import Image from "next/image";
import allData from "../../storage/allData";
import Description from "@/app/components/Description";

export default function SelectedWork({ params }) {
  const selectedId = allData.find((item) => item.id == params.main);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
      {selectedId?.image2.map((item) => (
        <div
          key={item}
          className="flex flex-col items-center justify-center mx-auto mt-10 space-x-8"
        >
          <div className="aspect-w-4 aspect-h-5">
            <Image
              className="transition-transform transform-origin-center transform hover:scale-150 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4"
              src={item}
              alt="personal picture"
              width={200}
              height={200}
            />
          </div>
          <Description description={selectedId.description} />
        </div>
      ))}
      <a className="font-bold ml-4 mt-10" href={`/users/works`}>
        {" "}
        Meus Trabalhos, {"\u2192"} &hearts;{" "}
      </a>
    </div>
  );
}
