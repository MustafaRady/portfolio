import React from "react";
import Footer from "./Footer";
import { useSearchParams } from "react-router-dom";

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Git',
    'Responsive Web Design',
    'Bootstrap',,
    'PHP',
    'ASP.NET',
    'C#',
    'Laravel','Tailwind Css'
  ];
  
  const allSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Git',
    'Responsive Web Design',
    'Bootstrap',,
    'PHP',
    'ASP.NET',
    'C#',
    'C Prgramming Language',
    'Java',
    'Python',
    'Mips', 
    'Object Oriented', 
    'GitHub', 
    'Laravel', 
    'Tailwind Css',
    'Problem-solving',
  ];

export default function Skills(){
    const [searchFilter, setSearchFilter] = useSearchParams();
    const filter = searchFilter.get('filter') === "active"
    return(
        <div>
            <div className="row">
                <div className="container" style={{height:"110px"}}>
                    <h1 className="Skills-Title">Skills :</h1>
                </div>
                {filter && <div><ul className="Skills">
                            { filter && skills.map((element,index) => 
                            (<div className="Skill-element"> {element}</div>)
                        )}</ul>
                    </div>
                }

                {!filter && <div><ul className="Skills">
                            { allSkills.map((element,index) => 
                            (<div className="Skill-element"> {element}</div>)
                        )}</ul>
                    </div>}
                
            </div>
            <hr/> 

            <div style={{textAlign:"center"}}>
                <button className=" btn btn-primary" onClick={()=>setSearchFilter({'filter':'active'})} > Show Web Development Skills  </button>
                <button className=" btn btn-primary" style={{marginLeft:"30px"}} onClick={()=>setSearchFilter({})} > Show All Skills  </button>
            </div>
            <Footer/>
        </div>
    )
}