"use client"
import Image from "next/image";
import allData from "../storage/allData"
import Description from "./Description"

export default function WorkPicture() {

    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-10'>
            {allData.map((data) => (
                <a className="flex flex-col items-center no-underline" key={data.id} href={`/users/${data.id}`}>
                    <Image
                        className='transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4'
                        src={data.image1}
                        width={200}
                        height={300}
                        alt={'work picture'}
                        priority={true}
                    />
                    <Description description={data.description} />
                </a>
            ))}
        </div>



    )
}