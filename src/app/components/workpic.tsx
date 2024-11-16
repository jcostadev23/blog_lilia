import allData from "../storage/allData";
import Details from "./Details";
import SpecialCard from "./SpecialCard";

const WorkPicture = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-10">
        {allData.map((data) => (
          <a key={data.id} href={`/users/${data.id}`}>
            <SpecialCard>
              <img
                className="object-fit w-full h-full rounded-md"
                src={data.image1}
                alt="personal picture"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
              <Details details={data.details} />
            </SpecialCard>
          </a>
        ))}
      </div>
    </>
  );
};

export default WorkPicture;
