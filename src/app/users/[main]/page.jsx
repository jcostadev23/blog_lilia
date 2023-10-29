import Image from "next/image";
import allData from "../../storage/allData";
import Name from "../../components/Name"
import Details from "../../components/Details";

export default function Jimbo({ params }) {
    const selectedId = allData.find(item => item.id == params.main)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10'>
            <div className="flex flex-col items-center mt-10 space-x-8">
                <Image src={selectedId.image1} alt="personal picture" width={200} height={200} />
                <Name name={selectedId.name} />
                <Details details={selectedId.details} />
            </div>
            <div className="flex flex-col items-center mt-10 space-x-8">
                <Image src={selectedId.image1} alt="personal picture" width={200} height={200} />
                <Name name={selectedId.name} />
                <Details details={selectedId.details} />
            </div>
            <a className="font-bold ml-4 mt-10" href={`/users/works`}> Meus Trabalhos, {'\u2192'} &hearts; </a>
        </div>
    )
}