import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import serviceList from "../../images/service-list.png";
import addService from "../../images/add-service.png";
import adminActive from "../../images/admin-active.png";

const AdminNav = () => {
   return (
      <div className="admin-nav">
         <div className="admin-nav-top">
            <div className="admin-nav-top-left">
               <img src={logo} alt="" />
               <h2 className="f-500">Add Services</h2>
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
                  <Link to="/services">
                     <div className="image-container">
                        <img src={addService} alt="" />
                     </div>{" "}
                     Add Service
                  </Link>
               </li>
               <li>
                  <Link to="/services" className="active">
                     <div className="image-container">
                        <img src={adminActive} alt="" />
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
