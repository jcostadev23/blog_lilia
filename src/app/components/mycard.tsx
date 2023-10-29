import React from "react";
import ProfilePicture from "./myprofilepic";

export default function MyCard() {
  return (
    <div className="card">
      <div className="w-full bg-cover bg-center m-8 flex flex-col items-center justify-center sm:flex-row">
        <section className="w-full sm:w-1/2 p-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima hic modi aperiam, natus obcaecati sunt odio quibusdam! Possimus eaque sint accusantium ipsum, reiciendis laborum? Fugiat soluta sit voluptatum ipsa eum rem voluptate, eos eligendi veritatis laudantium, est consectetur dignissimos, impedit recusandae ullam aut quae. Veritatis odit assumenda qui et voluptate!</p>
        </section>
        <section className="w-full sm:w-1/2 p-8">
          <div className="flex flex-col items-center justify-center">
            <ProfilePicture />
          </div>
        </section>
      </div>
      <a className="font-bold ml-4" href={`/users/about/`}>Mais sobre meu trabalho {'\u2192'} &hearts; </a>
    </div>
  );
}