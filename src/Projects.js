import React from "react";

export default function Projects(){
    return(
        <>
        <div className="container flex flex-col justify-center items-center" id="projects">
            <h1 className="md:text-5xl text-2xl font-bold">Projects</h1>
            <div className=" bg-white 
                            drop-shadow-xl 
                            my-10
                            flex flex-col justify-center items-center
                            md:text-xl text-xs font-bold project-box"
                 >
                No Projects Available yet ....  <br/>
                Check my Github account : <a
                    href="https://www.github.com/MustafaRady"
                    className="github"
                    > My Github</a>
            </div>
        </div>
        </>
    )
}