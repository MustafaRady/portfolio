import React from "react";
import { Link , NavLink, redirect } from "react-router-dom";
import menu from "./Media/list.png"
import Projects from "./Projects";
import goBack from "./Media/go-back-arrow.png"





 function Nav(){

    const closeMenu =()=>{
        menu = document.getElementById("menu");
        var container = document.getElementById("container")
        menu.style.top="-100vh";
        container.style.height="40px";
        const menu_icon=document.getElementById("menu-icon");
        menu_icon.style.display="block";

    }

    const openMenu =()=>{
        menu = document.getElementById("menu");
        const menu_icon=document.getElementById("menu-icon");
        var container = document.getElementById("container")

        menu_icon.style.display="none";

        menu.style.top="0";
        menu.style.display="block";
        menu.style.height="300px"

        container.style.height="300px";
    }

    const goToHome=()=>{
        
    }

    const scrollDown = (id)=>{
        const section = document.getElementById(id);
        if(section != null){
            section.scrollIntoView({behavior:"auto"})
            closeMenu();
            return ; 
        }
        else{
           goToHome();
           openMenu();
        }
    }
    
    return(
        <>
        <nav className="container-css" id="container">
            <img src={menu} className="menu-icon" id="menu-icon" onClick={()=>openMenu()}></img>
            <div className="menu-box" id="menu">
                <div className="right-link">
                    <img src={goBack}  onClick={()=>closeMenu()}></img>
                </div>
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link onClick={()=>scrollDown("projects")}>Projects</Link>
                    <Link onClick={()=>scrollDown("skills")} >Skills</Link>
                </div>
            </div>
        </nav>
        <nav id="nav">
            <div className="navbar">
                <ul className="nav-elements">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" onClick={()=>scrollDown("projects")}>Projects</Link>
                    <Link className="nav-link" onClick={()=>scrollDown("skills")}>Skills</Link>
                </ul>
            </div>
        </nav>
        </>
    )

}
export default Nav;

/*


*/