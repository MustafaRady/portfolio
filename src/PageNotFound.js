import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound(){

    const navigate= useNavigate();
    // useLayoutEffect=(()=>{
    //     const btn= document.getElementById("btn");
    //     btn.setAttribute("className","btn btn-danger");
    //     btn.style.marginLeft = "47%";
    // })
    return(
        <div>
            <div className="container">
                <div className="NotFound-container">
                    <h2 
                        style={{paddingTop:"30px"}}
                    >Page is not available - 404 </h2>
                    <h3>No Path to this page ...</h3>
                </div>
            </div>
            <button 
            id="btn"
            className="btn btn-danger "
            style={{marginLeft:"47%"}}
            onClick={()=>navigate(-1)}>
                Go Back 
            </button>
        </div>
    )
}