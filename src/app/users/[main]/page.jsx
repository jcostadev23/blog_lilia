import Description from "@/app/components/Description";
import Image from "next/image";
import allData from "../../storage/allData";

export default function SelectedWork({ params }) {
  const selectedId = allData.find((item) => item.id == params.main);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
        {selectedId?.image2.map((item) => (
          <div
            key={item}
            className="w-full sm:w-3/4 text-center bg-transparent rounded shadow-lg flex flex-col items-center justify-center mx-auto mt-10"
          >
            <Image
              className="object-cover w-full h-full transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out"
              src={item}
              alt="personal picture"
              width={200}
              height={200}
            />
            <Description description={selectedId.description} />
          </div>
        ))}
      </div>
      <a className="font-bold ml-4 mt-10" href={`/users/works`}>
        {" "}
        Meus Trabalhos, {"\u2192"} &hearts;{" "}
      </a>
    </>
  );
}
