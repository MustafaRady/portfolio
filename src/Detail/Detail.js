import React from "react";
import "./Detail.css"



export default function Detail({image,title,detail,closeDetail}){
    console.log("rendered...")
    console.log("Image" + image);
    
    return(
        <div onClick={()=>closeDetail(false)} className=" fixed inset-0 bg-grey-300  backdrop-blur-sm text-white h-screen w-screen  flex justify-center items-center  ">
           <div  className="bg-white text-black  drop-shadow-2xl rounded-lg box ">
            <div className="container">
                <div className="grid grid-cols-1 md:gap-y-10 gap-y-2 text-center">
                    <div><img src={image} alt="" className="flex mx-auto mt-3 image"></img></div>
                    <div className="md:text-5xl box-title font-bold">{title}</div>
                    <div className="md:text-2xl box-detail font-bold">{detail}</div>
                    </div>
                </div>
            </div>
             
        </div>
    );
}