import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getOrders } from "./action/order";

import { GET_ORDERS_QUERY } from "./graphQl/order";
import { useQuery } from "@apollo/react-hooks";

const App = ({ getOrders, orders }) => {
   const { loading, data } = useQuery(GET_ORDERS_QUERY);
   useEffect(() => {
      data && getOrders(data && data.getOrders);
   }, [loading]);
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
