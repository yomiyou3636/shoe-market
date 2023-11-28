import './App.css';
import { SiJordan } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import Jordanimg from './jordan3.png'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
function Jordan() {
  return (
    <div className="App w-full h-screen bg-[#5e0202]">
      <nav className='z-20 w-full h-[9vh] bg-[#5e0202] border-b-[1px]  border-slate-400 flex justify-between items-center'>
     <div className='w-[20%] pl-20 h-full flex items-center justify-start '>       <SiJordan className='text-white text-[40px]'/>
</div>
<div className='w-[30%]   h-full grid grid-cols-3 gap-[2px]'>
        <Link to={'/'} className=' cursor-pointer text-white text-[16px] border-t-[5px] border-white flex justify-center items-center '>Nike</Link>
        <Link to={'/jordan'} className='text-white cursor-pointer text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center'>Jordan</Link>
        <Link to={'/adidas'} className='text-white cursor-pointer text-[16px] border-t-[5px] border-white flex justify-center items-center'>Adidas</Link>
      </div>
      <div className='w-[20%] h-full flex justify-evenly pr-20 items-center'>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[20px] bg-red-500'><IoIosSearch /></div>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-black text-[20px] bg-white'><IoMdMenu /></div>
      </div>

      </nav>
      <div className='w-full h-[91vh] flex flex-col '>
        <div className='w-full h-[60vh] overflow-hidden flex justify-center items-center text-[#470101]  text-[50vh] font-bold  '>JORDAN</div>
        <div className='w-full h-[31vh]  text-[150px]  flex justify-evenly items-center text-[#470101] font-bold  '>
          <SiJordan/>
          <SiJordan/>
          <SiJordan/>
        </div>
        <div className='w-full h-[91vh] flex  absolute  '>
               <div id='just' className='w-[30%] mt-[20vh] text- h-[70%] flex flex-col items-start pl-20 text-white  text-[100px]'> <span className=' font-mono h-[13vh] flex items-center justify-center'>BE</span><span className='h-[13vh] flex font-mono items-center justify-center'>LIKE</span><span className=' h-[13vh] flex items-center font-mono justify-center'>MIKE</span></div>
               <div className='w-[50%]   h-[full] ' >
                <img src={Jordanimg} alt=''></img>
               </div>
               <div className='w-[20%]  flex justify-center items-center text-white flex-col text-[25px]'><span className='text-yellow-400 text-[20px] '>JORDAN 3</span> <span className='text-white text-[27px] '>$320</span> 
</div>
        </div>
      </div>
      
    </div>
  );
}

export default Jordan;
