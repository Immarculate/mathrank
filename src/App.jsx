// import "./App.css";
import { useEffect, useState } from "react";
import Bottombar from "./components/Bottombar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  const [, setIsSmallScreen] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray flex-col">
      <Nav />
  
      <div className="flex">
        <div className="lg-bg-content"><SideBar /></div>
        <div  className="smt-content f-1"><Hero /></div> 
      </div>

      <Bottombar />
    </div>
  );
}

export default App;
