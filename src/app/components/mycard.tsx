import React from "react";
import ProfilePicture from "./myprofilepic";

const MyCard = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <section className="w-full sm:w-full p-8">
        <p className="text-lg text-gray-800 font-semibold text-center mt-4">
          `LiliaMakup` não é apenas um acessório de beleza; é uma afirmação.
          Delicie-se com a sensação luxuosa de seu design cuidadosamente
          elaborado, enquanto ele complementa a sua beleza natural e adiciona um
          toque de elegância à sua vida cotidiana.
        </p>
      </section>
      <ProfilePicture />
      <div className="flex flex-col space-y-4">
        <a className="font-bold ml-4" href={`/users`}>
          {" "}
          Mais sobre mim, {"\u2192"} &hearts;{" "}
        </a>
        <a className="font-bold ml-4" href={`/users/works`}>
          {" "}
          Meus Trabalhos, {"\u2192"} &hearts;{" "}
        </a>
      </div>
    </div>
  );
};
export default MyCard;
