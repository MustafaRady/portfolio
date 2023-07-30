import React from "react";

export default function Footer(){
    return(
        <div className="md:h-32 h-16 flex  justify-center items-center 
                        font-bold md:text-2xl text-xs " style={{background:"linear-gradient(to right,rgb(245, 245, 245),rgb(53, 198, 235),rgb(245, 245, 245))"}}>
                <p>&copy; 2023 Moustafa Radi .  All rights reserved.</p>

        </div>
    );
}