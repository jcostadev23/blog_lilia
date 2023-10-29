import Image from "next/image";

export default function Works() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 m-10 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic4.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic7.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic9.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic12.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic19.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/workpic/pic18.jpg" alt="work picture" width={150} height={150} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex! Atque aliquam maiores repellendus voluptatibus reprehenderit quibusdam obcaecati dolores quaerat.
                </p>
            </div>
        </div>
    )
}