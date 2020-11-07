import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import serviceList from "../../images/service-list.png";
import addService from "../../images/add-service.png";
import addServiceActive from "../../images/add-service-active.png";
import admin from "../../images/admin.png";
import adminActive from "../../images/admin-active.png";
import AddService from "../pages/AddService";

const AdminNav = ({ active }) => {
   return (
      <div className="admin-nav">
         <div className="admin-nav-top">
            <div className="admin-nav-top-left">
               <img src={logo} alt="" />
               <h2 className="f-500">
                  {active === "make-admin"
                     ? "Add Admin"
                     : active === "add-service"
                     ? "Add Service"
                     : "Service List"}
               </h2>
            </div>
            <h4 className="f-500">Sufi Ahmed</h4>
         </div>
         <div className="admin-nav-left">
            <ul>
               <li>
                  <Link to="/services">
                     <div className="image-container">
                        <img src={serviceList} alt="" />
                     </div>
                     Service list
                  </Link>
               </li>
               <li>
                  <Link
                     to="/add-service"
                     className={`${active === "add-service" ? "active" : ""}`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active === "add-service"
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
                     className={`${active === "make-admin" ? "active" : ""}`}
                  >
                     <div className="image-container">
                        <img
                           src={active === "make-admin" ? adminActive : admin}
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
