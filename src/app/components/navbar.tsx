import Link from 'next/link'
import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa'

export default function Navbar(){
    return(
        <nav className="bg-slate-600 p-4 sticky top-0
        drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between
             flex-col sm:flex-row">
                <h1 className='text-3xl font-bold text-white grid place-content-centermb-2 md:mb-0'>
                <Link href='/' className='text-white/90
                no-underline hover:text-white'>Lilia</Link>
                </h1>
                <div className='flex flex-row justify-center sm:justify-evenly align-middle
                gap-4 text-white text-4xl lg:text-5xl'>
                    <Link className='text-white/90 hover:text-white' href="https://www.facebook.com/liliadionisio.93">
                    <FaFacebook/>
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ==">
                    <FaInstagram/>
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1">
                    <FaTiktok/>
                    </Link>

                </div>
            </div>
        </nav>
    )
}