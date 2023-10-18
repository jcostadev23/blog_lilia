import Image from 'next/image'

export default function WorkPicture() {
    const imagePaths = Array.from({ length: 19 }, (_, index) => `/images/workpic/pic${index + 1}.jpg`);

    return (
        <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-8'>
            {imagePaths.map((image, index) => (
                <a key={index} href={`/users/${index + 1}`} className='no-underline'>
                    <div className="md:w-2/5">
                        <Image
                            className='transition-transform transform-origin-center transform hover:scale-125 duration-500 ease-in-out drop-shadow-xl
                         shadow-black rounded mx-auto mt-4'
                            src={image}
                            width={200}
                            height={200}
                            alt={'work picture'}
                            priority={true}
                        />
                    </div>
                </a>
            ))}
        </section >
    )
}