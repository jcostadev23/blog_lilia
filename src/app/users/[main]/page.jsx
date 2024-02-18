import Description from "@/app/components/Description";
import Image from "next/image";
import SpecialCard from "../../components/SpecialCard";
import allData from "../../storage/allData";

export default function SelectedWork({ params }) {
  const selectedId = allData.find((item) => item.id == params.main);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 items-center">
        {selectedId?.image2.map((item) => (
          <SpecialCard key={item}>
            <img
              className="object-fit w-full h-full rounded-md"
              src={item}
              alt="personal picture"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
            <Description description={selectedId.description} />
          </SpecialCard>
        ))}
      </div>
      <a className="font-bold ml-4 mt-10" href={`/users/works`}>
        {" "}
        Meus Trabalhos, {"\u2192"} &hearts;{" "}
      </a>
    </>
  );
}
