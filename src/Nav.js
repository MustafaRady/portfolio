import React from "react";
import { Link } from "react-router-dom";





 function Nav(){

    const scrollDown = (id)=>{
        const section = document.getElementById(id);
            section.scrollIntoView({behavior:"auto"})
            return ; 
        
    
    }
    
    return(
        <>
        <nav className=" h-12 
                                text-sm font-bold 
                                drop-shadow-xl
                                columns-2
                                md:text-2xl
                                "
            style={{background:"linear-gradient(to right,rgb(245, 245, 245),rgb(53, 198, 235),rgb(245, 245, 245))"}}
            id="nav">
            <div className="py-2 px-10">
                Portfolio
            </div>
            <div className="flex md:justify-center hidden md:block py-2">
                <ul className="grid grid-cols-3  ">
                    <Link className="mx-7 hover:scale-125 duration-300" to="/">Home</Link>
                    <Link className="mx-7 hover:scale-125 duration-300" onClick={()=>scrollDown("projects")}>Projects</Link>
                    <Link className="mx-7 hover:scale-125 duration-300" onClick={()=>scrollDown("skills")}>Skills</Link>
                </ul>
            </div>
        </nav>
        </>
    )

}
export default Nav;

/*


*/