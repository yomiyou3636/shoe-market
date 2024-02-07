import './App.css';
import { SiNike } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import nike from './nikecar3.png'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
import one from './image/nikeone.png'
import two from './image/niketwo.png'
import three from './image/nikethree.png'
import four from './image/nikefour.png'
import five from './image/nikefive.png'
import six from './image/nikesix.png'
import seven from './image/nikeseven.png'
import eight from './image/nikeeight.png'
function Nike() {
    const [marginLeft, setmarginLeft]=useState('0%')
    const handleleft=()=>{
        console.log("clikcked")
        if(marginLeft==='-104%'){}
        else{setmarginLeft(prevMarginLeft => `${parseInt(prevMarginLeft) - 26}%`);
    }

    }
    const handlerigth=()=>{
         if(marginLeft==='0%'){

        }
        else {        setmarginLeft(prevMarginLeft => `${parseInt(prevMarginLeft) + 26}%`);
    }
    }
  return (
    <div className="App w-full h-screen bg-[#173162]">
      <nav className='z-20 w-full h-[9vh] bg-[#183162] border-b-[1px]  border-slate-400 flex justify-between items-center'>
     <div className='w-[20%] pl-20 h-full '>       <SiNike className='text-white text-[40px]'/>
</div>
      <div className='w-[30%]   h-full grid grid-cols-3 gap-[2px]'>
        <Link to={'/'} className=' cursor-pointer text-white text-[16px] border-t-[5px] border-orange-600 flex justify-center items-center '>Nike</Link>
        <Link to={'/jordan'} className='text-white cursor-pointer text-[16px] border-t-[5px] border-white flex justify-center items-center'>Jordan</Link>
        <Link to={'/adidas'} className='text-white cursor-pointer text-[16px] border-t-[5px] border-white flex justify-center items-center'>Adidas</Link>

      </div>
      <div className='w-[20%] h-full flex justify-evenly pr-20 items-center'>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-white text-[20px] bg-red-500'><IoIosSearch /></div>
        <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center text-black text-[20px] bg-white'><IoMdMenu /></div>
      </div>

      </nav>
      <div className='w-full h-[91vh] flex flex-col '>
        <div className='w-full h-[60vh] overflow-hidden flex justify-center items-center text-[#11244e] text-[60vh] font-bold  '>NIKE</div>
        <div className='w-full h-[31vh]  text-[150px]  flex justify-evenly items-center text-[#11244e] font-bold  '>
          <SiNike/>
          <SiNike/>
        </div>
       
        <div className='w-full h-[91vh] flex  absolute  '>
               <div id='just' className='w-[30%] mt-[20vh] text- h-[70%] flex flex-col items-start pl-20 text-white  text-[100px]'> <span className=' font-mono h-[13vh] flex items-center justify-center'>JUST</span><span className='h-[13vh] flex font-mono items-center justify-center'>DO</span><span className=' h-[13vh] flex items-center font-mono justify-center'>IT</span></div>
               <div className='w-[50%]  h-full flex justify-center items-center ' >
                <img src={nike} className='h-[70vh] w-full' alt=''></img>
               </div>
               <div className='w-[20%]  flex justify-center items-center text-white flex-col text-[25px]'><span className='text-yellow-400 text-[20px] '>NIKE AIR FORCE</span> <span className='text-white text-[27px] '>$260</span></div>
               

        </div>
        <div className='absolute w-full h-[25vh] pl-[20%] py-3  z-900  flex justify-end items-start pr-3      mt-[66vh] '>
            <button onClick={handleleft} className='w-[60px] h-[5vh] rounded-lg bg-neutral-500 bg-opacity-50 mr-[10px] mt-[3vh]   text-white text-[20px]  flex justify-center items-center absolute '><GrNext /></button>
            <button onClick={handlerigth} className='w-[60px] h-[5vh] rounded-lg bg-neutral-500 bg-opacity-50 mr-[10px]  mt-[13vh]  text-white text-[25px] flex justify-center items-center  absolute '><IoIosArrowBack /></button>
            <div className='w-full h-full  gap-3 flex overflow-y-hidden overflow-x-hidden rounded-xl '>
                <div style={{marginLeft:marginLeft}}   className=' border-[5px] border-blue-950 rounded-xl flex transition-all ease-in-out duration-200 h-full min-w-[25%]  bg-white'> 
                <img src={one} alt="" className='h-full w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>
                </div>
                <div className='h-full flex min-w-[25%] rounded-xl shadow-xl border-[5px] border-blue-950 bg-white'>
                <img src={five} alt="" className='h-full     w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={three} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={six} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={two} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={seven} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={four} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
                <div className='h-full flex min-w-[25%] border-[5px] border-blue-950 rounded-xl bg-white'>
                <img src={eight} alt="" className='h-full  w-[50%]' />
                <div className='w-[50%] h-full flex justify-center flex-col items-center'><h1 className='text-[#11244e] font-bold text-[20px]'>NIKE</h1><h1 className='text-[#11244e] font-bold text-[20px]'>Price</h1><p>$876</p></div>

                </div>
               
            </div>
        </div>

      </div>
    

    </div>
    
  );
}

export default Nike;
