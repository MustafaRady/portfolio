import React from "react";
import { Link } from "react-router-dom";
import M from "./m.png"




 function Nav(){

    const scrollDown = (id)=>{
        const section = document.getElementById(id);
            section.scrollIntoView({behavior:"auto"})
            return ; 
    }
    
    return(
        <>
        <nav className=" h-20
                                flex
                                text-sm font-bold 
                                drop-shadow-xl
                                md:text-2xl
                                w-full
                                "
            style={{background:"linear-gradient(to right,rgb(245, 245, 245),rgb(53, 198, 235),rgb(245, 245, 245))"}}
            id="nav">
            <div className="container py-2 md:w-1/2 w-full">
                <div className="flex items-center md:justify-start justify-between ">
                <img alt="" src={M} className="h-16 w-16"></img>
                <h1 className="ml-4 text-lg">Portfolio</h1>
                </div>
            </div>
            <div className=" container w-1/2 md:justify-end hidden md:block py-2 ">
                <ul className="flex flex-row gap-20 justify-end">
                    <Link className=" hover:scale-125 duration-300" to="/">Home</Link>
                    <Link className=" hover:scale-125 duration-300" onClick={()=>scrollDown("projects")}>Projects</Link>
                    <Link className=" hover:scale-125 duration-300" onClick={()=>scrollDown("skills")}>Skills</Link>
                </ul>
            </div>
        </nav>
        </>
    )

}
export default Nav;

/*


*/