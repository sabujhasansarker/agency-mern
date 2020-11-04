import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Navbar = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const toggle = useRef(false);
   const [toggleMenu, setToggleMenu] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () =>
         setScrollPosition(window.pageYOffset)
      );
   }, []);
   const onClick = () => {
      toggle.current = !toggle.current;
      setToggleMenu(!toggleMenu);
      toggle.current
         ? document.body.classList.add("nav-open")
         : document.body.classList.remove("nav-open");
   };
   return (
      <header className={`${scrollPosition > 100 ? "stick-nav" : ""}`}>
         <nav className="container">
            <Link to="/">
               <img src={logo} alt="" />
            </Link>
            <div className="navbar-right">
               <div className="responsive" onClick={() => onClick()}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div
                  className={`nav-container ${
                     toggleMenu ? "open-nav" : "close-nav"
                  } `}
               >
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/">Our Portfolio</Link>
                     </li>
                     <li>
                        <Link to="/">Our Team</Link>
                     </li>
                     <li>
                        <Link to="/">Contact Us</Link>
                     </li>
                     <li>
                        <Link to="/login" className="btn-primary">
                           Login
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
