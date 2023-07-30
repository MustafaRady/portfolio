import "./style.css";
import {Route,Routes} from "react-router-dom"
import Home from "./Home";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";



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
 