import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Navbar = () => {
   const [scrollPosition, setSrollPosition] = useState(0);

   useEffect(() => {
      window.addEventListener("scroll", () =>
         setSrollPosition(window.pageYOffset)
      );
   }, []);
   return (
      <header className={`${scrollPosition > 100 ? "stick-nav" : ""}`}>
         <nav className="container">
            <Link to="/">
               <img src={logo} alt="" />
            </Link>
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
                  <Link to="/" className="btn-primary">
                     Login
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
