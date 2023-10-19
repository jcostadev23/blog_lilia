import ProfilePicture from "./myprofilepic";

export default function MyCard() {
  return (
    <div className="m-8 sm:mt-8 mb-4 sm:mb-16 text-lg sm:text-2xl text-center text-gray-800">
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <ProfilePicture />
        <p className="sm:ml-4 ">
          Olá, chamo-me Lília Dionísio!<br />
          Desde muito pequena que sempre fui apaixonada por Maquilhagem, sempre admirei quem gosta de se maquilhar,
          admiro todas as que seguiram seus sonhos e se tornaram profissionais,
          Um dia queria eu ser como elas , nunca segui meu sonho por medo de Falhar.<br />
          Durante muito tempo a Maquilhagem foi meu Refúgio, minha luz no fim do Túnel.<br />
          Em dias tristes e obscuros, me maquilhar apenas para tirar fotos era o que me restava, e acredite, me fazia e faz tão bem!<br />
          Então acredito que a Maquilhagem vai muito além da beleza, superficialidade ou estética, é um manifesto de autoestima.<br />
          A autoestima nos afasta dos medos. Sinto que uma das minhas missões, é fazer isso, fazer o que mais gostamos, por Amor, por Prazer!
        </p>
      </div>
    </div>
  );
}