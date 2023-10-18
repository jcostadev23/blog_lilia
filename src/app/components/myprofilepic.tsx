import Image from 'next/image'

export default function ProfilePicture() {
    return (
        <Image
            className="rounded border-2 border-white shadow-lg"
            src='/images/profilepic.jpg'
            width={250}
            height={250}
            alt='Lilia Dionisio'
            priority={true} />
    )
}