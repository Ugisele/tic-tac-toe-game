// import React from "react";
import "../App";
// import bg1 from '../assets/bg1.png';


const Trailer = ({img,title,description,date}) => {
    return(
             <div className='flex gap-2 '>
                <div className=" ">
                <img src= {img} alt="" className="w-16 h-24 rounded-md"/>
                </div>
                <div className="flex-col justify-center pt-3">
                <h2 className="text-md text-white">{title} </h2>
                <p className="text-white text-xs">{description} </p>
                <p className="text-white text-xs">{date}</p>
                </div>
            </div>
    )
}
export default Trailer;