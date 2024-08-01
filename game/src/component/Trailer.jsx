// import React from "react";
// import bg1 from '.bg1.png';
import "../App";
import bg1 from '../assets/bg1.png';


const Trailer = ({img,title,description,rate}) => {
    return(
        <div>
             <div className='flex-row flex p-6 bg-red-400 gap-2'>
                <div className=" ">
                <img src= {bg1} alt="movies" className="w-12 h-16 rounded-md"/>
                </div>
                <div className="flex-col justify-center pt-1">
                <h2 className="text-sm text-white">The flash </h2>
                <p className="text-white text-xs">Series </p>
                <p className="text-white text-xs">rate</p>
                </div>
            </div>
        </div>
        
    )
}
export default Trailer;