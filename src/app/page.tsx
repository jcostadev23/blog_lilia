import MyCard from './components/mycard'
import WorkPicture from './components/workpic'

export default function Home() {
  return (
    <div>
      <MyCard/>
      <div className='text-2xl font-bold text-black grid place-content-center mb-2 md:mb-0 border-t-2 border-gray-900'>
        Alguns Trabalhos meus
      </div>
        <WorkPicture/>
      </div>
  );
}
