"use client"
import { FC } from "react";
import MyCard from "./components/Mycard";
import WorkPicture from "./components/workpic";

const page: FC = ({ }) => {

  return (
    <div>
      <MyCard />
      <div className='grid place-content-center'>
        <WorkPicture />
      </div>
    </div>
  );
}
export default page;
