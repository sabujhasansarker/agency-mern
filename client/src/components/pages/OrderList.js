import React from "react";
import ClientNav from "../template/ClientNav";
import iphone from "../../images/iphone.png";

const OrderList = () => {
   return (
      <div className="admin client order-list">
         <ClientNav active="Order List" />
         <div className="admin-content">
            <div className="orders">
               <div className="single-order">
                  <div className="single-order-top">
                     <img src={iphone} alt="" />
                     <p className="button done">Done</p>
                  </div>
                  <h2>Web & Mobile design</h2>
                  <p>
                     We craft stunning and amazing web UI, using a well drrafted
                     UX to fit your product.
                  </p>
               </div>
               <div className="single-order">
                  <div className="single-order-top">
                     <img src={iphone} alt="" />
                     <p className="button pandding">Panding</p>
                  </div>
                  <h2>Web & Mobile design</h2>
                  <p>
                     We craft stunning and amazing web UI, using a well drrafted
                     UX to fit your product.
                  </p>
               </div>
               <div className="single-order">
                  <div className="single-order-top">
                     <img src={iphone} alt="" />
                     <p className="button pandding">Panding</p>
                  </div>
                  <h2>Web & Mobile design</h2>
                  <p>
                     We craft stunning and amazing web UI, using a well drrafted
                     UX to fit your product.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderList;
