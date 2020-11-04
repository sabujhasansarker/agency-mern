import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getOrders } from "./action/order";
import { getServices } from "./action/service";
// GraphQL
import { GET_ORDERS_QUERY } from "./graphQl/order";
import { GET_SERVICES } from "./graphQl/service";
import { useQuery } from "@apollo/react-hooks";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = ({ getOrders, getServices, orders }) => {
   const { data: ordersQuery } = useQuery(GET_ORDERS_QUERY);
   const { loading, data: servicesQuery } = useQuery(GET_SERVICES);
   useEffect(() => {
      ordersQuery && getOrders(ordersQuery && ordersQuery.getOrders);
      servicesQuery && getServices(servicesQuery && servicesQuery.getServices);
   }, [loading]);
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route exact to="/" component={Home} />
         </Switch>
         <Footer />
      </Router>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
});

export default connect(mapStateToProps, { getOrders, getServices })(App);
