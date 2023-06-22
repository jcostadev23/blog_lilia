import Image from 'next/image'

export default function ProfilePicture(){
    return (
        <section className='w-full mx-auto'>
            <Image
            className='border-4 border-black dark:border-slate-400
            drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src='/images/profilepic.jpg'
            width={250}
            height={250}
            alt='Lilia Dionisio'
            priority={true}/>
        </section>
    )
}