import Image from "next/image";
import React, { useState } from "react";

export default function WorkPicture() {
    const [showMyPages, setShowMyPages] = useState(false)
    const imagePaths = Array.from({ length: 19 }, (_, index) => (`/images/workpic/pic${index + 1}.jpg`));

    return (
        <div>
            <button className={`bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300`}
                onClick={() => setShowMyPages(!showMyPages)}>{(!showMyPages ? "Alguns Trabalhos " : "Fechar Trabalhos")}</button>
            {showMyPages ?
                <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 m-8'>
                    {imagePaths.map((image, index) => (
                        <a key={index} href={`/users/${index + 1}`} className='no-underline flex justify-center items-center'>
                            <Image
                                className='transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mt-4'
                                src={image}
                                width={200}
                                height={200}
                                alt={'work picture'}
                                priority={true}
                            />
                        </a>
                    ))}
                </section >
                : ""}

        </div>
    )
}