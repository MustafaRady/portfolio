import React, { useEffect,  useState } from "react";
import Footer from "./Footer";
import Detail from "./Detail/Detail";
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
import { motion, useAnimation } from "framer-motion"




import {Pagination} from "swiper/modules"
import { useInView } from "react-hook-inview";




  const allSkills=[
    {
        id:1,
        title: 'HTML',
        description: 'HTML (Hypertext Markup Language) is the standard language for creating web pages and web applications. It provides the structure and content for websites, enabling browsers to interpret and display the information to users.',
        image: "/languages/html-5.png"
      },
      {
        id:2,
        title: 'CSS',
        description: 'CSS (Cascading Style Sheets) is used to control the presentation and layout of web pages. It works alongside HTML to define how elements should be displayed on the screen, making websites visually appealing.',
        image: "/languages/css-3.png"
      },
      {
        id:2,
        title: 'JavaScript',
        description: 'JavaScript is a versatile programming language that allows developers to create dynamic and interactive web applications. It is commonly used for adding behavior and interactivity to websites.',
        image:"/languages/java-script.png"
      },
      {
        id:3,
        title: 'React',
        description: 'React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of web applications, making it a powerful tool for creating interactive and responsive frontends.',
        image: "/languages/react.png"
      },
      {
        id:4,
        title: 'Node.js',
        description: 'Node.js is a server-side JavaScript runtime that allows developers to build scalable and efficient web applications. It uses an event-driven, non-blocking I/O model, making it lightweight and suitable for real-time applications.',
        image: "/languages/nodejs.png"
      },
      {
        id:5,
        title: 'Express.js',
        description: 'Express.js is a minimal and flexible Node.js web application framework. It simplifies the process of building web servers and APIs, providing a robust set of features for creating scalable web applications.',
        image: "/languages/no-photos.png"
      },
      {
        id:6,
        title: 'MongoDB',
        description: 'MongoDB is a NoSQL database that stores data in JSON-like documents. It is known for its scalability and flexibility, making it an excellent choice for handling large volumes of unstructured or semi-structured data.',
        image:"/languages/database-storage.png"
      },

      {
        id:7,
        title: 'SQL',
        description: 'SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases. It allows developers to query, insert, update, and delete data from databases, making it essential for data-driven applications.',
        image:"/languages/sql-server.png"
      },
      {
        id:8,
        title: 'Git',
        description: 'Git is a distributed version control system that enables developers to track changes in their codebase. It facilitates collaboration among team members, making it easier to work on projects together and manage code efficiently.',
        image: "/languages/git.png"
      },
      {
        id:9,
        title: 'Responsive Web Design',
        description: 'Responsive Web Design is an approach to web development that ensures websites adapt and display properly on various devices and screen sizes. It aims to provide users with an optimal viewing experience, regardless of the device they use.',
        image: "/languages/responsive-design.png"
      },
      {
        id:10,
        title: 'Bootstrap',
        description: 'Bootstrap is a popular CSS framework that streamlines the process of building responsive and visually appealing web pages. It offers a set of pre-designed components and styles, making it easy to create modern and consistent UIs.',
        image: "/languages/bootstrap.png"
      },
      {
        id:11,
        title: 'PHP',
        description: 'PHP is a server-side scripting language primarily used for web development. It allows developers to create dynamic web pages and interact with databases, making it a foundational language for building web applications.',
        image: "/languages/php.png"
      },
      {
        id:12,
        title: 'ASP.NET',
        description: 'ASP.NET is a web application framework developed by Microsoft. It allows developers to build dynamic websites, web applications, and web services. ASP.NET provides robust tools and libraries for creating secure and scalable web solutions.',
        image: "/languages/web.png"
      },
      {
        id:13,
        title: 'C#',
        description: 'C# is a powerful and versatile programming language developed by Microsoft. It is widely used for building Windows applications, web applications using ASP.NET, and games using game development frameworks like Unity.',
        image: "/languages/c-sharp.png"
      },
      {
        id:14,
        title: 'C Programming Language',
        description: 'C is a general-purpose programming language known for its efficiency and versatility. It is the foundation for many other programming languages and is commonly used in system programming, embedded systems, and low-level programming.',
        image:"/languages/letter-c.png"
      },
      {
        id:15,
        title: 'Java',
        description: 'Java is a popular and widely-used programming language known for its "write once, run anywhere" capability. It is used for building a variety of applications, including web, mobile, desktop, and enterprise solutions.',
        image: "/languages/java.png"
      },
      {
        id:16,
        title: 'Python',
        description: 'Python is a high-level, interpreted programming language with a simple and easy-to-read syntax. It is renowned for its versatility and is used in web development, data analysis, artificial intelligence, scripting, and more.',
        image:"/languages/python.png"
      },
      {
        id:17,
        title: 'Mips',
        description: 'MIPS (Microprocessor without Interlocked Pipeline Stages) is a type of processor architecture commonly used in various embedded systems, gaming consoles, and networking devices. It offers high performance and efficiency for specific applications.',
        image: "/languages/no-photos.png"
      },
      {
        id:18,
        title: 'Problem-solving',
        description: 'Problem-solving is a crucial skill for developers. It involves identifying challenges, analyzing them, and devising effective solutions. It is essential for overcoming coding obstacles and creating efficient programs.',
        image: "/languages/contribution.png"
      },
      {
        id:19,
        title: 'TailwindCss',
        description: 'TailwindCss is a popular CSS framework that streamlines the process of building responsive and visually appealing web pages. It offers a set of pre-designed components and styles, making it easy to create modern and consistent UIs.',
        image: "/languages/no-photos.png"
      },
  ]

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
    const [slidesPerView,setSlidesPerView] = useState(3);
    const [toggle,setToggle] = useState(false);
    const [title ,setTitle] = useState("");
    const [detail ,setDetail] = useState("");
    const [image ,setImage] = useState();
    const [ref,isVisible]=useInView({
        threshold:1,
    })
    const [refSkill,isVisibleSkill]=useInView({
        threshold:1,
    })
    const mainControl = useAnimation();
    const skillsControl = useAnimation();

    useEffect(()=>{
        function updateSize(){
            if(window.innerWidth >= 740){
            setSpaceBetween(50);
            setSlidesPerView(3);
            }
            else{
                setSpaceBetween(1)
                setSlidesPerView(2);
            }

        }
       
        updateSize();
        window.addEventListener("resize",updateSize)
    },[])

    useEffect(()=>{
        if(isVisible){
            mainControl.start("visible")
        }
        else{
            mainControl.start("hidden")
        }
        if(isVisibleSkill){
            skillsControl.start("visible")
        }
        else{
            skillsControl.start("hidden")
        }
    },[isVisible ,isVisibleSkill,skillsControl,mainControl])
   

    function openPop(element){
        var body = document.getElementById("body");
        body.classList.toggle("opacity-30")
        setTitle(element.title);
        setDetail(element.description);
        setImage(element.image);

        
        console.log("Image" + element.image);
        setToggle(true);
    }
    function closePop(){
        var body = document.getElementById("body");
        body.classList.toggle("opacity-30")
        setToggle(false);
    }


    return(
        <>
        <div id="body" className="container ">
            <div className=" md:columns-2 md:py-10 mb-4 mt-5"  >
                <div className="flex flex-col justify-center items-center justify-center mr-4 w-full" >
                    <h1 className="md:text-5xl text-center text-md font-bold" > I'm ,</h1>
                    <h1 className="md:text-5xl text-center text-md font-bold"> Moustafa Radi,</h1>
                    <h2 className="md:text-5xl text-center text-md font-bold"> A Full Stack Developer </h2>
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
            <div ref={refSkill} >
                <div className="row my-10 " id="skills" >
                <div className="container">
                    <h1 className="md:text-6xl text-2xl font-bold text-center mb-3">Skills </h1>
                </div>
                <div >
                    <ul className="grid grid-cols-4 md:gap-5  gap-2">

                        {allSkills
                        .map((element,index)=>(
                            <>
                                <motion.div
                                variants={
                                    {
                                        hidden:{scale:0 , opacity:0},
                                        visible:{scale:1 , opacity:1}
                                    }
                                }
                                initial={skillsControl}
                                animate={skillsControl}
                                onClick={()=>openPop(element)}  
                                className="border-4 md:h-24 h-16  
                                                flex justify-center items-center
                                                font-bold md:text-2xl text-xs text-center 
                                                hover:bg-purple-100 hover:scale-125 duration-300" key={index}>{element.title}</motion.div>
                               
                            </>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
            
            <hr/>

            <div className="container ">
            <div className="text-center lg:text-5xl text-2xl mt-3 font-bold"> Services </div>
            <Swiper
            style={{marginTop:"5px"}}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                pagination={{
                    clickable:true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {services.map((element)=>{
                    return <SwiperSlide>
                                    <div className=" lg:h-80 lg:w-80 w-40 h-40 hover:bg-purple-100 duration-300 my-5 rounded-lg lg:border-4 border border-grey-900  text-center lg:gap-y-10 flex flex-col justify-center items-center"
                                         >
                                        <img src={element.image} className="lg:h-28 lg:w-28 h-8 w-8 " alt=""></img>
                                        <div  className="lg:text-2xl font-bold title" >{element.title}</div>
                                        <div  className="lg:text-lg detail">{element.detail}</div>
                                    </div>
                                    
                                </SwiperSlide>
                })}
                </Swiper>
            </div>
            

            <hr/>

            <div className="columns-2 h-50 py-5">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="md:text-5xl text-xs  font-bold">Education</h1>
                        <h4 className="py-3 text-center font-bold text-xs"> <span className="span">Lebanese University |</span><br></br> Bachelor degree of computer science</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="md:text-5xl font-bold">Languages</h1>
                        <h3 className="text-xs md:text-lg py-2 font-bold">Native in Arabic</h3>
                        <h3 className="text-xs md:text-lg font-bold">Proficient in English</h3>
                    </div>
            </div>
        </div>
        <hr></hr>
        <div ref={ref}>
            <motion.div 
            variants={{
                hidden:{ opacity: 0, scale: 0.5 },
                visible:{ opacity: 1, scale: 1 }
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5 }}>
                <Projects />
            </motion.div>
        </div>
        
        <Footer/>
        {toggle && <Detail image={image} title={title} detail={detail} closeDetail={closePop}/>}
        </>
    )
}