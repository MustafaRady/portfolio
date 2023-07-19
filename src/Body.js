import React from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Image from "./image.png"
import whatsapp from "./Media/whatsapp.png"
import facebook from "./Media/facebook .png"
import insta from "./Media/instagram .png"
import linkedIn from "./Media/linkedin .png"
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




export default function Body(){
    return(
        <>
        <div className="container">
            <div className="row" >
                <div className="col-6 Definition">
                    <h1 > I'm ,</h1>
                    <h1> Moustafa Radi</h1>
                    <h1> A Full Stack Developer </h1>
                    <h3 >Unleash our creativity and build something extraordinary side by side</h3>
                    <div className="grid-media">
                        <a href="#" className="grid-media-element" ><img src={whatsapp}  ></img></a>
                        <a href="#" className="grid-media-element"><img src={facebook}  ></img></a>
                        <a href="#" className="grid-media-element"><img src={insta}  ></img></a>
                        <a href="#" className="grid-media-element"><img src={linkedIn} ></img></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={Image} alt="" height="80%" width="90%"></img>
                </div>
            </div>
            <hr/>
            
            {/* skils */}
            <div className="row" id="skills">
                <div className="container">
                    <h1 className="Title">Skills </h1>
                </div>
                <div >
                    <ul className="Skills">

                        {allSkills
                        .filter((element)=>element.length>10)
                        .map((element,index)=>(
                            <div  className="Skill-element-large" key={index}>{element}</div>
                        ))}
                        {allSkills
                        .filter((element)=>element.length<=10)
                        .map((element,index)=>(
                            <div  className="Skill-element" key={index}>{element}</div>
                        ))}
                    </ul>
                </div>
            </div>
            <hr/>

            {/* Services */}
            <div>
                <h1 className="Title">Services</h1>
                <div className="container">
                    <ul className="Services-list">
                        <li>
                            <h4>
                                Responsive Web Design: I specialize in creating modern, responsive websites that adapt to different screen sizes and devices.
                                Your website will look great and function seamlessly on desktop, tablet, and mobile.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                Front-end Development: I can transform your design concepts into interactive and user-friendly websites using HTML, CSS, and JavaScript.
                                I ensure cross-browser compatibility and clean code for optimal performance.
                            </h4>   
                        </li>
                        <li>
                            <h4>
                                CMS Integration: If you need a content management system (CMS) to easily manage and update your website,
                                I can integrate popular CMS platforms like WordPress or Drupal, customizing them to fit your needs
                            </h4>   
                        </li>
                        <li>
                            <h4>
                                Website Maintenance: Once your website is live, I provide ongoing maintenance and support services to ensure its smooth operation.
                                This includes regular updates, backups, security monitoring, and bug fixes.
                            </h4>   
                        </li>
                    </ul>
                    
                </div>
            </div>
            <hr/>

            <div className="row">
                <div className="col-6">
                    <div>
                        <h1 className="Title">Education</h1>
                        <div className="Detail">
                            <h4 className="Uni-Name"> <span className="span">Lebanese University</span>| Bachelors Degree</h4>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <h1 className="Title">Languages</h1>
                        <div className="Detail">
                            <h3>Native in Arabic</h3>
                            <h3>Proficient in English</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <Projects/>
        <Footer/>
        </>
    )
}