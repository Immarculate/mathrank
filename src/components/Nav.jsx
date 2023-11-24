/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { CgArrowLongUpL } from "react-icons/cg";
import { CgCalendarTwo } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";
import { CgToolbarRight } from "react-icons/cg";

const Nav = ({ toggleNav, isNavOpen }) => {
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

  

  const navLinks = [
    { className: "text-xl-1 body", title: "Edit", icon: <CgToolbarRight /> },
    { className: "text-xl-1", title: "Courier info", icon: <CgCalendarTwo /> },
    { className: "text-xl-1", title: "Share info", icon: <CgArrowLongUpL />  },
    { className: "text-xl-1 text-red", title: "Remove", icon: <CgRemove value={{ color: "red" }}/> },
  ];

  return (
    <div className={`h-1 w-full nav-bar ${toggleNav ? 'bg-white' : 'bg-gray'} ${isSmallScreen ? 'sm-content' : 'lg-content'}`}>
    {/* {isNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={toggleNav}
        />
      )} */}
    {/* div a */}
       <div className="flex h-1 w-full bg-white items-center justify-between nav-bar lg-content">
       <div className="">
        <i
          className="fas fa-arrow-left"
          style={{ color: "gray", fontSize: "25px", opacity: "0.5" }}
        ></i>
      </div>
      <div>
        <span className="font-serif body text-xl-2 text-bold opacity-75 mr-5">
          Bitcoin Wallet
        </span>
      </div>

      <div className="flex mr-5">
        <ul className="flex list-none text-bold items-center opacity-75 body">
          <div className="m-3 body flex justify-center ietms-center">Edit <CgToolbarRight /> </div>
          <div className="m-3 body flex justify-center ietms-center">Courier info <CgCalendarTwo /></div>
          <div className="m-3 body flex justify-center ietms-center">Share info <CgArrowLongUpL /></div>
          <div className="m-3 body text-red flex justify-center ietms-center">Remove <CgRemove className='' value={{ color: "red" }}/></div>
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
      <i className="fa fa-ellipsis-v" style={{ color: "gray", fontSize: "25px", opacity: "0.5" }}
          onClick={toggleNav}></i>
        
          
        
      </div>
       </div>
 
       </div>
       {isNavOpen && (
           
           <ul className="navbar-menu mt-1 mr-1 p-1">
              {navLinks.map((link) => (
                <li className={`${link.className} flex-col body justify-between list-none mt-1 `} key={link}>
                   <div className='flex items-center justify-between'>
                   {link.title}
                   <div>{link.icon} </div>
                    
                   </div>
                  <hr />
                </li>
              ))}
            </ul>
           
          )}
    </div>
  );
};

export default Nav;
