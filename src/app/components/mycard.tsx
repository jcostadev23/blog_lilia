import React from "react";
import ProfilePicture from "./Myprofilepic";

export default function MyCard() {
  return (
    <div className="w-full bg-cover bg-center m-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:mt-4 mb-4 sm:mb-16 text-lg sm:text-2xl text-center text-gray-700">
          <div className="flex flex-col sm:flex-row">
            <section className="w-full sm:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/images/background_pic/my_background.jpg')` }}>
            </section>
            <section className="w-full sm:w-1/2">
              <div className="flex flex-col items-center sm:items-center m-8">
                <ProfilePicture />
                <h3 className="font-bold tracking-tight leading-none text-5xl ml-4 text-center sm:text-left">A Minha Paixão</h3>
                <p className="mt-4 text-center sm:text-left">Exprimentar varias secções</p>
                <ul className="mt-8 text-center sm:text-left">
                  <li>Sombracelhas</li>
                  <li>Olhos</li>
                  <li>Simples</li>
                  <li>Casamentos</li>
                  <li>Batizados</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}