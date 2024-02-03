import ProfilePicture from "./myprofilepic";

const MainPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center">
        <section className="w-full sm:w-3/4 text-center p-6 bg-transparent m-10 rounded shadow-lg">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Redefinindo Beleza: Descubra o Poder da Maquiagem em Nosso Mundo de
            Cores e Estilo
          </h1>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            LiliaMakup não é apenas um acessório de beleza; é uma afirmação.
            Delicie-se com a sensação luxuosa de seu design cuidadosamente
            elaborado, enquanto ele complementa a sua beleza natural e adiciona
            um toque de elegância à sua vida cotidiana.
          </p>
        </section>
        <div className="flex items-center justify-center mt-10">
          <ProfilePicture
            src={"/images/lilia/main.jpg"}
            alt={"Lilia Dionisio"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src={"/images/background_pic/my_background.jpg"}
            alt={"perfumes e pinces espalhados"}
          />
        </div>
        <section className="w-full sm:w-3/4 text-center p-6 bg-transparent m-10 rounded shadow-lg">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <section className="w-full sm:w-3/4 text-center p-6 bg-transparent m-10 rounded shadow-lg ">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Paleta de Cores Deslumbrante: Explore a Beleza Infinita da Expressão
          </h2>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            Bem-vindo ao nosso mundo de cores exuberantes e possibilidades
            infinitas! Nossa paleta de maquiagem é uma sinfonia de tons
            cuidadosamente selecionados para inspirar a sua criatividade. De
            tons suaves a vibrantes, cada cor conta uma história única. Permita
            que sua imaginação voe alto e crie looks deslumbrantes que refletem
            a sua beleza interior. Descubra a magia da expressão através das
            cores e ilumine cada momento da sua jornada de beleza.
            #ExploreSuaCriação 💄🌈
          </p>
        </section>
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src={"/images/background_pic/colorPalete.jpg"}
            alt={"perfumes e pinces espalhados"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center mt-10">
        <div className="flex items-center justify-center mx-auto">
          <ProfilePicture
            src={"/images/background_pic/lapisBatton.jpg"}
            alt={"lapis e battons"}
          />
        </div>
        <section className="w-full sm:w-3/4 text-center p-6 bg-transparent m-10 rounded shadow-lg ">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600">
            Traços de Elegância: O Poder Transformador dos Lápis e Batons
          </h2>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            Em cada traço, uma história de confiança e elegância se revela.
            Nossa coleção de lápis e batons é uma celebração da autenticidade,
            proporcionando a você as ferramentas para realçar sua beleza única.
            Dos lábios marcados por tons vibrantes aos olhos contornados com
            precisão, cada detalhe reflete seu estilo inconfundível. Descubra a
            magia de expressar sua personalidade com cores que falam mais alto
            que palavras. Deixe-se envolver pelo encanto dos tons e
            transforme-se em sua própria obra-prima. 💋✨ #BelezaComEstilo
            #TransformaçãoComCores
          </p>
        </section>
      </div>
      <div className="flex flex-col items-end space-y-4 mt-20 ">
        <a
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600 hover:text-xl mr-4 "
          href={`/users/works`}
        >
          {" "}
          Meus Trabalhos, {"\u2192"} &hearts;{" "}
        </a>
        <a
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-600 hover:text-xl mr-4 "
          href={`/users`}
        >
          {" "}
          Mais sobre mim, {"\u2192"} &hearts;{" "}
        </a>
      </div>
    </>
  );
};
export default MainPage;
