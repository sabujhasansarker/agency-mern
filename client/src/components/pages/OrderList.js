import React from "react";

/// Redux
import { connect } from "react-redux";

import ClientNav from "../template/ClientNav";

const OrderList = ({ orders, auth }) => {
   let ordersMatch = orders.filter(
      (order) => order.email === auth.email && order
   );
   return (
      <div className="admin client order-list">
         <ClientNav active="Order List" addOrderMenu={true} />
         <div className="admin-content">
            <div className="orders">
               {ordersMatch.map((order, i) => (
                  <div className="single-order" key={i}>
                     <div className="single-order-top">
                        <img src={order.service.icon} alt="" />
                        <p
                           className={`button ${process ? "pandding" : "done"}`}
                        >
                           {process ? "Pandding" : "Done"}
                        </p>
                     </div>
                     <h2>{order.service.title}</h2>
                     <p>{order.service.dec}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
   auth: state.auth.auth,
});

export default connect(mapStateToProps, {})(OrderList);
