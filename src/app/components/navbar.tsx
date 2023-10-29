import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="bg-pink-100 sticky top-0
        drop-shadow-xl z-10">
            <div className="max-w-screen-xl p-4 mx-auto flex items-center justify-between sm:flex-row">
                <div className="flex items-center space-x-2 flex-row text-white text-xl lg:text-xl ">
                    <a href='/' className='no-underline'>
                        <Image src="/images/logo.jpg" alt="logo" height={75} width={75} />
                    </a>
                    <a href='/users/works' className='no-underline hover:text-black'>
                        Trabalhos
                    </a>
                    <span>/</span>
                    <a href='/users' className='no-underline hover:text-black'>
                        About
                    </a>
                </div>
                <div className='flex flex-row space-x-4 text-white text-4xl lg:text-5xl'>
                    <a className='text-white/90 hover:text-blue-600' href="https://www.facebook.com/liliadionisio.93">
                        <FaFacebook />
                    </a>
                    <a className='text-white/90 hover:text-pink-500' href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ==">
                        <FaInstagram />
                    </a>
                    <a className='text-white/90 hover:text-gray-800' href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1">
                        <FaTiktok />
                    </a>
                    <a className='text-white/90 hover:text-green-500' href="https://wa.me/351924486733? text= Para Fazer Marcaçao ">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </nav>
    )
}