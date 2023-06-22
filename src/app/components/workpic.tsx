import Image from 'next/image'

export default function WorkPicture(){
    return (
        <section className='w-full mx-auto flex justify-center'>
            {[{ src: '/images/workpic.jpg', alt: 'work picture' },
                { src: '/images/workpic2.jpg', alt: 'work picture' },
                { src: '/images/workpic1.jpg', alt: 'work picture' }
            ].map((image, index) => (
                <Image
                key={index}
                className='border-2 border-black dark:border-slate-400 drop-shadow-xl shadow-black rounded mx-auto mt-8'
                src={image.src}
                width={200}
                height={200}
                alt={image.alt}
                priority={true}
                />
            ))}
        </section>
    )
}