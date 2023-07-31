import React from "react";



export default function Detail({image,title,detail,closeDetail}){
    console.log("rendered...")
    console.log("Image" + image);
    
    return(
        <div onClick={()=>closeDetail(false)} className=" fixed inset-0 bg-grey-300  backdrop-blur-sm text-white h-screen w-screen  flex justify-center items-center ">
           <div style={{width:"900px" , height:"800px"}} className="bg-white text-black  drop-shadow-2xl rounded-lg ">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-10 text-center">
                    <div><img src={image} alt="" height={220} width={220} className="flex mx-auto mt-3"></img></div>
                    <div className="text-7xl font-bold">{title}</div>
                    <div className="text-3xl font-bold">{detail}</div>
                    </div>
                </div>
            </div>
             
        </div>
    );
}