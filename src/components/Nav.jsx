// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { title: "Edit", icon: <i className="fas fa-edit"></i> },
    { title: "Courier info", icon: <i className="fas fa-truck"></i> },
    { title: "Share info", icon: <i className="fas fa-share-alt"></i> },
    { title: "Remove", icon: <i className="fas fa-trash"></i> },
  ];

  return (
    <div className={`h-1 w-full nav-bar ${isSmallScreen ? 'sm-content' : 'lg-content'}`}>
      {/* Common content for both div a and div b */}
    {/* div a */}
       <div className="flex h-1 w-full bg-white items-center justify-between nav-bar lg-content">
       <div className="">
        <i
          className="fas fa-arrow-left"
          style={{ color: "gray", fontSize: "25px", opacity: "0.5" }}
        ></i>
      </div>
      <div>
        <span className="font-serif body text-xl-2 font-bold opacity-75 mr-5">
          Bitcoin Wallet
        </span>
      </div>

      <div className="flex mr-5">
        <ul className="flex list-none text-bold items-center opacity-75 body">
          <div className="m-3">Edit <i className="fas fa-edit"></i></div>
          <div className="m-3">Courier info <i className="fas fa-truck"></i></div>
          <div className="m-3">Share info <i className="fas fa-share-alt"></i></div>
          <div className="m-3">Remove <i className="fas fa-trash"></i></div>
        </ul>
      </div>

      
       </div>
 
    {/* div b */}
       <div className="sm-content w-5">
       <div className="flex h-1 w-full bg-white items-center justify-between nav-bar">
       <div className="">
        <i
          className="fas fa-arrow-left"
          style={{ color: "gray", fontSize: "25px", opacity: "0.5" }}
        ></i>
      </div>
      <div>
        <span className="font-serif body text-xl-2 font-bold opacity-75">
          Bitcoin Wallet
        </span>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "gray", fontSize: "25px", opacity: "0.5" }}
          onClick={toggleNav}
        />
        <div className="">
          {isNavOpen && (
           <div className="navbar-menu mr-1 mt-1">
           <ul className="bg-white flex-col justify-center mr-1">
              {navLinks.map((link) => (
                <li className="list-none mt-1" key={link}>
                  <div className="flex  justify-between items-center mr-2">
                    {" "}
                    {link.title}
                    {link.icon}
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
           </div>
          )}
        </div>
      </div>
       </div>
 
       </div>
    </div>
  );
};

export default Nav;
