import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";

/// Reducer
import { connect } from "react-redux";
import { logOut } from "../../action/auth";

/// image
import logo from "../../images/logo.png";

const Navbar = ({ auth, logOut, admins }) => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const toggle = useRef(false);
   const [toggleMenu, setToggleMenu] = useState(false);
   const adminMatch =
      admins && admins.find((admin) => auth && auth.email === admin.email);

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
                        <a href="#home">Home</a>
                     </li>
                     <li>
                        <a href="#service">Our Service</a>
                     </li>
                     <li>
                        <a href="#work">Work</a>
                     </li>
                     <li>
                        <a href="#feedback">Feedback</a>
                     </li>
                     <li>
                        <a href="#contact">Contact Us</a>
                     </li>
                     {auth ? (
                        <Fragment>
                           <li>
                              {auth.displayName}{" "}
                              {adminMatch ? (
                                 <ul>
                                    <li>
                                       <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                       <Link to="/add-service">
                                          Add Service
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="/make-admin">Make Admin</Link>
                                    </li>
                                 </ul>
                              ) : (
                                 <ul>
                                    <li>
                                       <Link to="/order-list">Order List</Link>
                                    </li>
                                    <li>
                                       <Link to="/review">Add Review</Link>
                                    </li>
                                 </ul>
                              )}
                           </li>
                           <li
                              className="btn-primary logout"
                              onClick={() => logOut()}
                           >
                              Logout
                           </li>
                        </Fragment>
                     ) : (
                        <li>
                           <Link to="/login" className="btn-primary">
                              Login
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

const mapStateToProps = (state) => ({
   auth: state.auth.auth,
   admins: state.auth.admins,
});

export default connect(mapStateToProps, { logOut })(Navbar);
