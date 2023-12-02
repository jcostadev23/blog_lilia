import React from "react";
import Image from "next/image";
import allData from "../../storage/allData";
import { Workstypes } from "@/app/components/types";
import Description from "@/app/components/Description";

interface Props {
  main: number;
  works: Workstypes;
}

const SelectedWork: React.FC<Props> = (params) => {
  const selectedId = allData.find((item) => item.id == params.main);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
      {selectedId?.image2.map((item) => (
        <div
          key={item}
          className="flex flex-col items-center justify-center mx-auto mt-10 space-x-8"
        >
          <Image src={item} alt="personal picture" width={200} height={200} />
          <Description description={selectedId.description} />
        </div>
      ))}
      <a className="font-bold ml-4 mt-10" href={`/users/works`}>
        {" "}
        Meus Trabalhos, {"\u2192"} &hearts;{" "}
      </a>
    </div>
  );
};

export default SelectedWork;
