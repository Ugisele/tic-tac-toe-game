// import React from "react";
// import bg1 from '.bg1.png';
import "../App";
import bg1 from '../assets/bg1.png';


const Trailer = () => {
    return(
        <div className='flex-col flex p-6 bg-red-400'>
        <div className=" ">
          <img src= {bg1} alt="movies" style={{ height:'110px'}} className="w-32"/>
          </div>
          <div className="flex-col">
          <h2 className="text-2xl text-white">The flash </h2>
          <p className="text-white">Series </p>
          <p className="text-white">rate</p>
          </div>
         
       
      </div>
    )
}
export default Trailer;