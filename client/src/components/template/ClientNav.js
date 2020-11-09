import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import serviceList from "../../images/service-list.png";
import serviceListActive from "../../images/service-list-active.png";
import order from "../../images/order.png";
import orderActive from "../../images/order-active.png";
import review from "../../images/review.png";
import reviewActive from "../../images/review-active.png";

const ClientNav = ({ active }) => {
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
            <Link to="/">
               <img src={logo} alt="" className="logo" />
            </Link>
            <ul>
               <li>
                  <Link
                     to="/add-order"
                     className={`${
                        active.split(" ").join("-").toLowerCase() ===
                        "add-order"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "add-order"
                                 ? orderActive
                                 : order
                           }
                           alt=""
                        />
                     </div>
                     Add Order
                  </Link>
               </li>
               <li>
                  <Link
                     to="/order-list"
                     className={`${
                        active.split(" ").join("-").toLowerCase() ===
                        "order-list"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "order-list"
                                 ? serviceListActive
                                 : serviceList
                           }
                           alt=""
                        />
                     </div>{" "}
                     Order List
                  </Link>
               </li>
               <li>
                  <Link
                     to="/review"
                     className={`${
                        active.split(" ").join("-").toLowerCase() === "review"
                           ? "active"
                           : ""
                     }`}
                  >
                     <div className="image-container">
                        <img
                           src={
                              active.split(" ").join("-").toLowerCase() ===
                              "review"
                                 ? reviewActive
                                 : review
                           }
                           alt=""
                        />
                     </div>{" "}
                     Review
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default ClientNav;
