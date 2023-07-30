import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Image from "./myphoto.png"
import whatsapp from "./Media/whatsapp.png"
import facebook from "./Media/facebook .png"
import insta from "./Media/instagram .png"
import maintance from "./assets/maintenance.png"
import responsive from "./assets/responsive-design.png"
import ux from "./assets/ux.png"
import linkedIn from "./Media/linkedin .png"
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from "swiper/modules"


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
    'Bootstrap',
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

  const services = [
    {
        title:"Responsive Web Design",
        detail:"Create modern, adaptable websites for all devices.",
        image:responsive
    },
    {
        title:"Front-end Development ",
        detail:"Turn designs into interactive sites using HTML, CSS, and JS.",
        image:ux
    },
    {
        title:"CMS Integration",
        detail :"Turn designs into interactive sites using HTML, CSS, and JS.",
        image:ux
    },
    {
        title:"Website Maintenance",
        detail:"Ongoing support, updates, backups, and security monitoring",
        image:maintance
    }
    
];





export default function Body(){
    const [spaceBetween,setSpaceBetween] = useState(30);

    useEffect(()=>{
        if(window.innerWidth >= 1000){
            setSpaceBetween(30);
        }
        else{
            setSpaceBetween(60)
        }
    },[])

    return(
        <>
        <div className="container">
            <div className=" md:columns-2 md:py-10 mb-4 "  >
                <div className="flex flex-col justify-center items-center mr-4 " >
                    <h1 className="md:text-5xl text-2xl font-bold" > I'm ,</h1>
                    <h1 className="md:text-5xl text-2xl font-bold"> Moustafa Radi,</h1>
                    <h2 className="md:text-5xl text-2xl font-bold"> A Full Stack Developer </h2>
                    <p className="md:text-2xl text-xs text-center font-bold py-10" >Unleash our creativity and build something extraordinary side by side</p>
                    <div className="md:grid md:grid-cols-4 md:gap-5 md:my-10 flex flex-row md:py-6 gap-x-4 justify-center">
                        <a href="/" className="h-8 w-8 md:h-16 md:w-16"><img alt="" src={whatsapp}  ></img></a>
                        <a href="/" className="h-8 w-8 md:h-16 md:w-16"><img alt="" src={facebook}  ></img></a>
                        <a href="/" className="h-8 w-8 md:h-16 md:w-16"><img alt="" src={insta}  ></img></a>
                        <a href="/" className="h-8 w-8 md:h-16 md:w-16"><img alt="" src={linkedIn} ></img></a>
                    </div>
                </div>
                <div className="md:flex md:justify-end md:w-full md:block hidden flex justify-center">
                    <img src={Image} alt=""  className="md:w-full md:h-full rounded h-80 w-96 " ></img>
                </div>
            </div>
            <hr/>
            
            {/* skils */}
            <div className="row my-10 " id="skills" >
                <div className="container">
                    <h1 className="md:text-6xl text-2xl font-bold text-center mb-3">Skills </h1>
                </div>
                <div >
                    <ul className="grid grid-cols-4 md:gap-5  gap-2">

                        {allSkills
                        .map((element,index)=>(
                            <div  className="border-4 md:h-24 h-16  
                                             flex justify-center items-center
                                             font-bold md:text-2xl text-xs text-center 
                                             hover:bg-purple-100 hover:scale-125 duration-300" key={index}>{element}</div>
                        ))}
                    </ul>
                </div>
            </div>
            <hr/>

            <Swiper
            style={{marginTop:"20px"}}
                slidesPerView={3}
                spaceBetween={spaceBetween}
                pagination={{
                    clickable:true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {services.map((element)=>{
                    return <SwiperSlide>
                                    <div className=" md:h-96 md:w-96 w-32 h-32 hover:bg-purple-100 duration-300 my-5 rounded-lg md:border-4 box  border-grey-900  text-center md:gap-y-10 flex flex-col justify-center items-center"
                                         >
                                        <img src={element.image} className="md:h-32 md:w-32 h-8 w-8 " alt=""></img>
                                        <div  className="md:text-2xl font-bold title" >{element.title}</div>
                                        <div  className="md:text-md detail">{element.detail}</div>

                                    </div>
                                    
                                </SwiperSlide>
                })}
            </Swiper>

            <hr/>

            <div className="columns-2 h-50 py-5">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="md:text-5xl text-xs  font-bold">Education</h1>
                        <h4 className="py-3 font-bold text-xs"> <span className="span">Lebanese University</span>| Bachelors Degree</h4>
                    </div>
                    <div className="flex flex-col fjustify-center items-center">
                        <h1 className="md:text-5xl font-bold">Languages</h1>
                        <h3 className="text-xs md:text-lg py-2 font-bold">Native in Arabic</h3>
                        <h3 className="text-xs md:text-lg font-bold">Proficient in English</h3>
                    </div>
            </div>
        </div>
        <hr></hr>
        <Projects/>
        <Footer/>
        </>
    )
}