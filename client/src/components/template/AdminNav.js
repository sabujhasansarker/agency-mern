import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import serviceList from "../../images/service-list.png";
import serviceListActive from "../../images/service-list-active.png";
import addService from "../../images/add-service.png";
import addServiceActive from "../../images/add-service-active.png";
import admin from "../../images/admin.png";
import adminActive from "../../images/admin-active.png";

const AdminNav = ({ active }) => {
   const open = useRef(false);
   const [openNav, setOpenNav] = useState(false);
   const onClick = () => {
      open.current = !open.current;
      setOpenNav(!openNav);
   };
   document.body.classList.add("admin");
   !open.current
      ? document.body.classList.add("close-admin")
      : document.body.classList.remove("close-admin");
   return (
      <div className="admin-nav">
         <div className={`admin-nav-top ${openNav ? "adminNavHaderLeft" : ""}`}>
            <div className="admin-nav-top-left">
               <div onClick={() => onClick()} className="responsive">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <h2 className="f-500">{active}</h2>
            </div>
            <h4 className="f-500">Sufi Ahmed</h4>
         </div>
         <div className={`admin-nav-left ${openNav ? "openSideNav" : ""}`}>
            <img src={logo} alt="" className="logo" />
            <ul>
               <li>
                  <Link
                     to="/services"
                     className={`${
                        active.split(" ").join("-").toLowerCase() ===
                        "service-list"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "service-list"
                                 ? serviceListActive
                                 : serviceList
                           }
                           alt=""
                        />
                     </div>
                     Service list
                  </Link>
               </li>
               <li>
                  <Link
                     to="/add-service"
                     className={`${
                        active.split(" ").join("-").toLowerCase() ===
                        "add-service"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "add-service"
                                 ? addServiceActive
                                 : addService
                           }
                           alt=""
                        />
                     </div>{" "}
                     Add Service
                  </Link>
               </li>
               <li>
                  <Link
                     to="/make-admin"
                     className={`${
                        active.split(" ").join("-").toLowerCase() ===
                        "make-admin"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "make-admin"
                                 ? adminActive
                                 : admin
                           }
                           alt=""
                        />
                     </div>{" "}
                     Make Admin
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AdminNav;
