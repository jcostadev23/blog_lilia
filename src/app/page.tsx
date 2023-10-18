import { FC } from "react";
import WorkPicture from "./components/workpic";
import MyCard from "./components/mycard";


const page: FC = ({ }) => {
  return (
    <div>
      <MyCard />
      <div className='text-2xl font-bold text-gray-600 grid place-content-center m-4 md:mb-0 border-t-2 '>
        Alguns Trabalhos meus
      </div>
      <WorkPicture />
    </div>
  );
}
export default page;
