import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getOrders } from "./action/order";

const App = ({ getOrders, orders }) => {
   useEffect(() => {
      getOrders();
   }, [orders]);
   console.log(orders);
   return (
      <div className="App">
         <header className="App-header">
            <h1>Hello boss</h1>
         </header>
      </div>
   );
};

const mapstatetoprops = (state) => ({
   orders: state.order.orders,
});

export default connect(mapstatetoprops, { getOrders })(App);
