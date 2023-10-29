import Image from "next/image";
import React from "react";

export default function About() {

    return (
        <div>
            <div className="flex flex-col items-center mt-10 space-x-8">
                <Image src="/images/lilia/personal1.jpg" alt="personal picture" width={300} height={300} />
                <p className="text-lg text-gray-800 font-semibold text-center leading-7 m-12">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit sunt quo repellendus nihil! Quibusdam modi libero accusamus laudantium reiciendis iste fuga ad nesciunt dolor nostrum temporibus veritatis aperiam, reprehenderit nulla possimus, consequatur omnis harum facilis at ea molestias animi cumque facere. Alias veniam totam omnis dolor ipsa deleniti ab! Suscipit, sed. Temporibus aspernatur aliquid itaque soluta ipsa distinctio earum inventore? Enim animi dignissimos accusamus facilis modi laboriosam commodi dolore temporibus aliquid omnis, consequatur necessitatibus illo neque, ipsum soluta obcaecati provident iste at inventore. Nisi, minima ipsam ab exercitationem ea esse modi sit architecto, quis aperiam odit odio facere, quaerat ipsa est. Repellat aliquam soluta fugiat ad? Atque voluptas laborum enim, ab, iusto nemo sed fuga labore, laboriosam ut dignissimos ratione velit quidem. Sapiente, voluptatibus. Tenetur corporis nulla, dicta ipsum aperiam est deleniti quo illum veritatis accusantium excepturi et optio sapiente quae iste soluta minus itaque amet fuga omnis animi ad mollitia. Expedita cum odit earum, impedit laudantium culpa nam, quasi non assumenda delectus doloribus reiciendis tenetur voluptate iure natus repudiandae nihil vel nemo laboriosam numquam quidem? Expedita perferendis, explicabo aliquid temporibus distinctio, eligendi esse ratione dolores sunt vitae inventore rerum voluptatum ex amet corporis illum, dolor autem quo. Consequuntur, iusto!
                </p>
            </div>
            <a className="font-bold ml-4" href={`/`}>Pagina Inicial </a>
        </div>
    )
}