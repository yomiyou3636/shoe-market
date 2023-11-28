import './App.css';
import { SiNike } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import nike from './nike.png'
import { IoMdMenu } from "react-icons/io";

function App() {
  return (
    <div className="App w-full h-screen bg-[#173162]">
      <nav className='w-full h-[9vh] bg-[#183162] border-b-[1px]  border-slate-400 flex justify-between items-center'>
     <div className='w-[20%] pl-20 h-full '>       <SiNike className='text-white text-[40px]'/>
</div>
      <div className='w-[30%]  h-full grid grid-cols-5 gap-[2px]'>
        <div className=' cursor-pointer text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center '>Men</div>
        <div className='text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center'>Men</div>
        <div className='text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center'>Men</div>
        <div className='text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center'>Men</div>
        <div className='text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center'>Men</div>
      </div>
      <div className='w-[20%] h-full flex justify-evenly pr-20 items-center'>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[20px] bg-red-500'><IoIosSearch /></div>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-black text-[20px] bg-white'><IoMdMenu /></div>
      </div>

      </nav>
      <div className='w-full h-[91vh] flex flex-col '>
        <div className='w-full h-[60vh] flex justify-center items-center text-[#11244e] text-[60vh] font-bold  '>NIKE</div>
        <div className='w-full h-[31vh]  text-[150px]  flex justify-evenly items-center text-[#11244e] font-bold  '>
          <SiNike/>
          <SiNike/>
        </div>
        <div className='w-full h-[91vh] flex  absolute  '>
               <div id='just' className='w-[30%] mt-[20vh] text- h-[70%] flex flex-col items-start pl-20 text-white  text-[100px]'> <span className=' font-mono h-[13vh] flex items-center justify-center'>JUST</span><span className='h-[13vh] flex font-mono items-center justify-center'>DO</span><span className=' h-[13vh] flex items-center font-mono justify-center'>IT</span></div>
               <div className='w-[50%]  h-[80%] ' >
                <img src={nike} alt=''></img>
               </div>
               <div className='w-[20%]  flex justify-center items-center text-white flex-col text-[25px]'><span className='text-yellow-400 text-[20px] '>NIKE ZOOM AIR</span> <span className='text-white text-[27px] '>$260</span> 
</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
