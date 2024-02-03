import ProfilePicture from "./myprofilepic";

const MyCard = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-10 mx-auto">
      <section className="w-full sm:w-1/2 p-4">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
          Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo de
          Cores e Estilo
        </h1>
        <p className="text-lg text-gray-800 font-semibold mt-4">
          <strong className="font-semibold">LiliaMakup</strong> não é apenas um
          acessório de beleza; é uma afirmação. Delicie-se com a sensação
          luxuosa de seu design cuidadosamente elaborado, enquanto ele
          complementa a sua beleza natural e adiciona um toque de elegância à
          sua vida cotidiana.
        </p>
      </section>
      <ProfilePicture src={"/images/lilia/main.jpg"} alt={"Lilia Dionisio"} />
    </div>
  );
};
export default MyCard;
