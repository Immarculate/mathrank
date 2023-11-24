// import "./App.css";
import { useState } from "react";
import Bottombar from "./components/Bottombar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);



  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  

  
  return (
    <div className={` flex-col h-full `}>
      <Nav toggleNav={toggleNav} isNavOpen={isNavOpen} />
  
      <div onClick={ isNavOpen && toggleNav } className={` flex ${isNavOpen ? 'body-color' : 'bg-gray' }`}>
        <div className="lg-bg-content"><SideBar /></div>
        <div  className="smt-content f-1"><Hero /></div> 
      </div>

      <Bottombar />
    </div>
  );
}

export default App;
