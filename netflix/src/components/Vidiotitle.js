import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useSelector } from "react-redux";


function Vidiotitle({title, overview}) {
  // {

  const umb=useSelector((store)=>store.movie.umb)
  
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>

      <h1 className={`${umb?'hidden':'text-3xl font-bold'}`}>{title}  </h1>
      {/* */}
      <p className={`'hidden':"w-1/3 mt-2"}`}> {overview}
      
      
       {/*  */}
      </p>
      <div className="flex mt-8">
        <button className="mx-2 flex  px-6 py-2 items-center bg-white text-black rounded-md hover:bg-opacity-80">
          <FaPlay />Play</button>
        <button className="flex items-center px-6 py-2 bg-gray-500 opacity-70 text-black rounded-md"> 
          <CiCircleInfo /><span>Watch More</span></button>
      </div>  

    </div>
  );
}

export default Vidiotitle;
