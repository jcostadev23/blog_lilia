import Image from 'next/image'

export default function WorkPicture(){
    return (
        <section className='w-full mx-auto md:flex justify-center'>
            {['/images/workpic.jpg','/images/workpic2.jpg','/images/workpic1.jpg'].map((image, index) => (
                <Image
                key={index}
                className='scale-50 hover:scale-100 ease-in duration-500 border-2 border-black dark:border-slate-400 drop-shadow-xl shadow-black rounded mx-auto mt-8'
                src={image}
                width={200}
                height={200}
                alt={'work picture'}
                priority={true}
                />
            ))}
        </section>
    )
}