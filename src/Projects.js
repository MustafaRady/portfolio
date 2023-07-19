import React from "react";

export default function Projects(){
    return(
        <>
        <div className="container" id="projects" style={{display:"flex" ,flexDirection:"column"}}>
            <h1 className="Title">Projects</h1>
            <div className="box">
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