"use client";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import PlanetMenu from "./menu/PlanetMenu";

const Navbar = () => {
  return (
    <nav
      className="bg-white sticky top-0
        drop-shadow-xl z-10"
    >
      <div className="max-w-screen-xl p-1 mx-auto flex items-center justify-between sm:flex-row">
        <div className="flex items-center space-x-2 ml-20 text-white">
          <PlanetMenu />
        </div>
        <div className="flex flex-row space-x-4 text-white text-4xl lg:text-5xl mr-10">
          <a
            className="text-blue-400/90 hover:text-blue-600"
            href="https://www.facebook.com/liliadionisio.93"
          >
            <FaFacebook />
          </a>
          <a
            className="text-pink-400/90 hover:text-pink-500"
            href="https://instagram.com/lilia_dionisio25?igshid=ZDc4ODBmNjlmNQ=="
          >
            <FaInstagram />
          </a>
          <a
            className="text-gray-400/90 hover:text-gray-800"
            href="https://www.tiktok.com/@liliapatrici4.93?_t=8dMPTqgMikN&_r=1"
          >
            <FaTiktok />
          </a>
          <a
            className="text-green-400/90 hover:text-green-600"
            href="https://wa.me/351924486733? text= Para Fazer Marcaçao "
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
