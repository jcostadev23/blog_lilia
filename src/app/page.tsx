import MyCard from "./components/mycard";
import React, { FC } from "react";
import Image from "next/image";
import SlidePicture from "./components/Slide";

const page: FC = ({}) => {
  return (
    <>
      <MyCard />
      <div className="flex flex-row items-center justify-center mt-10 mx-auto">
        <Image
          src={"/images/background_pic/my_background.jpg"}
          alt={"perfumes e pinces espalhados"}
          width={300}
          height={500}
        />
        <section className="w-full sm:w-1/2 p-4">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Essência Desvelada: A Pintura Sutil da Beleza Cotidiana
          </h2>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            Em um universo de cores e aromas, a beleza se desdobra diante dos
            nossos olhos. Na suavidade do pincel, encontramos o toque sutil que
            realça nossa autenticidade, como pinceladas que revelam a verdade
            que reside em cada traço único de quem somos. O batom, qual pétala
            vibrante, colore nossos lábios com a intensidade de nossas paixões.
            É um eco silencioso da confiança que nos envolve, uma expressão de
            vitalidade que transcende a mera aparência. Ao lado, o perfume dança
            no ar, uma sinfonia de fragrâncias que nos envolvem como abraços
            invisíveis. Cada nota é uma lembrança de que a beleza é também uma
            experiência sensorial, uma composição delicada que se desdobra à
            medida que exploramos os matizes da nossa própria existência.
          </p>
        </section>
      </div>
      <div className="flex flex-col items-end space-y-4 mt-10">
        <a
          className="text-gray-600 font-bold hover:text-xl mr-4"
          href={`/users`}
        >
          {" "}
          Mais sobre mim, {"\u2192"} &hearts;{" "}
        </a>
        <a
          className="text-gray-600 font-bold hover:text-xl mr-4"
          href={`/users/works`}
        >
          {" "}
          Meus Trabalhos, {"\u2192"} &hearts;{" "}
        </a>
      </div>
    </>
  );
};
export default page;
