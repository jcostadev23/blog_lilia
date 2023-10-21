import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="bg-pink-100 p-4 sticky top-0
        drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between
             flex-col sm:flex-row">
                <a href='/' className='no-underline'>
                    <h1 className='text-3xl text-white/100 font-bold place-content-start mb-2 md:mb-0'>Lilia Make Up </h1>
                </a>
                <div className='flex flex-row justify-center sm:justify-evenly align-middle
                gap-4 text-white text-4xl lg:text-5xl'>
                    <a className='text-white/90 hover:text-white' href="https://www.facebook.com/liliadionisio.93">
                        <FaFacebook />
                    </a>
                    <a className='text-white/90 hover:text-white' href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ==">
                        <FaInstagram />
                    </a>
                    <a className='text-white/90 hover:text-white' href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1">
                        <FaTiktok />
                    </a>
                    <a className='text-white/90 hover:text-white' href="https://wa.me/351924486733? text= Para Fazer Marcaçao ">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </nav>
    )
}