import ProfilePicture from "./myprofilepic";

const MyBio = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src="/images/lilia/personal1.jpg"
            alt="personal picture"
          />
        </div>
        <section className="w-full sm:w-3/4 text-center p-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <section className="w-full sm:w-3/4 text-center p-6">
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
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src={"/images/lilia/wekend.jpg"}
            alt={"Lilia Dionisio"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src="/images/lilia/happy.jpg"
            alt="personal picture"
          />
        </div>
        <section className="w-full sm:w-3/4 text-center p-6">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <section className="w-full sm:w-3/4 text-center p-6">
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
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src={"/images/lilia/olhos.jpg"}
            alt={"Lilia Dionisio"}
          />
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <a className="font-bold" href={"/"}>
          Pagina Inicial{" "}
        </a>
      </div>
    </>
  );
};

export default MyBio;
