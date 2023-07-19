import "./style.css";
import {Route,Routes} from "react-router-dom"
import Skills from "./Skills";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer.js";
import menu from "./Media/list.png";
import PageNotFound from "./PageNotFound";
import About from "./About.js"
import Resume from "./Resume.js"
import Projects from "./Projects.js"



function App() {
  
  const scrollUp=(id)=>{
    const container = document.getElementById(id);
    container.scrollIntoView({behavior:"auto"});
  }
  return (
    <> 
    <div >
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
    <button className="roll-up" onClick={()=>scrollUp("nav")}></button>
    </>
    
  );
}

export default App;
 