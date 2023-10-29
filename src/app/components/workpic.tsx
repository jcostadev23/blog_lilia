"use client"
import Image from "next/image";

export default function WorkPicture() {
    const imagePaths = Array.from({ length: 14 }, (_, index) => (`/images/workpic/pic${index + 1}.jpg`));

    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-10'>
            {imagePaths.map((image, index) => (
                <a className="flex flex-col items-center no-underline" key={index} href={`/users/${index + 1}`}>
                    <Image
                        className='transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4'
                        src={image}
                        width={200}
                        height={300}
                        alt={'work picture'}
                        priority={true}
                    />
                    <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                    </p>
                </a>
            ))}
        </div>



    )
}