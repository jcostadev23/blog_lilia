import Image from "next/image";
import React from "react";
import ProfilePicture from "../components/myprofilepic";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto m-10">
        <ProfilePicture
          src="/images/lilia/personal1.jpg"
          alt="personal picture"
        />
        <section className="w-full sm:w-3/4 p-6">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Brilho Veranil: Maquiagem Simples e Original para Fins de Semana
            Radiantes
          </h2>
          <p className="text-lg text-gray-800 mt-10">
            Liberte sua beleza com uma maquiagem simples, mas incrivelmente
            original. Cores vibrantes e sutis brilham sob o sol do verão,
            realçando sua luminosidade natural. Desperte a vivacidade do fim de
            semana com uma maquiagem que captura a essência do verão em cada
            detalhe. 💫🌞
          </p>
        </section>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 mr-10 mx-auto">
        <section className="w-full sm:w-1/2 p-6">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo de
            Cores e Estilo
          </h1>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            <strong className="font-semibold">LiliaMakup</strong> não é apenas
            um acessório de beleza; é uma afirmação. Delicie-se com a sensação
            luxuosa de seu design cuidadosamente elaborado, enquanto ele
            complementa a sua beleza natural e adiciona um toque de elegância à
            sua vida cotidiana.
          </p>
        </section>
        <ProfilePicture
          src={"/images/lilia/wekend.jpg"}
          alt={"Lilia Dionisio"}
        />
      </div>
      <div className="flex flex-row items-center justify-center space-x-10  mx-auto m-10">
        <ProfilePicture src="/images/lilia/happy.jpg" alt="personal picture" />
        <section className="w-full sm:w-3/4 p-6">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Brilho Veranil: Maquiagem Simples e Original para Fins de Semana
            Radiantes
          </h2>
          <p className="text-lg text-gray-800 mt-10">
            Liberte sua beleza com uma maquiagem simples, mas incrivelmente
            original. Cores vibrantes e sutis brilham sob o sol do verão,
            realçando sua luminosidade natural. Desperte a vivacidade do fim de
            semana com uma maquiagem que captura a essência do verão em cada
            detalhe. 💫🌞
          </p>
        </section>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 mr-10 gap-10">
        <section className="w-full sm:w-1/2 p-6">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo de
            Cores e Estilo
          </h1>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            <strong className="font-semibold">LiliaMakup</strong> não é apenas
            um acessório de beleza; é uma afirmação. Delicie-se com a sensação
            luxuosa de seu design cuidadosamente elaborado, enquanto ele
            complementa a sua beleza natural e adiciona um toque de elegância à
            sua vida cotidiana.
          </p>
        </section>
        <ProfilePicture
          src={"/images/lilia/olhos.jpg"}
          alt={"Lilia Dionisio"}
        />
      </div>
      <div className="flex justify-center mt-20">
        <a className="font-bold" href={"/"}>
          Pagina Inicial{" "}
        </a>
      </div>
    </>
  );
}
