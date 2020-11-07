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
import Login from "./components/pages/Login";
import AddService from "./components/pages/AddService";
import MakeAdmin from "./components/pages/MakeAdmin";
import ServiceList from "./components/pages/ServiceList";
import AddOrder from "./components/pages/AddOrder";

const App = ({ getOrders, getServices, orders, services }) => {
   const { data: ordersQuery } = useQuery(GET_ORDERS_QUERY);
   const { loading, data: servicesQuery } = useQuery(GET_SERVICES);
   useEffect(() => {
      ordersQuery && getOrders(ordersQuery && ordersQuery.getOrders);
      servicesQuery && getServices(servicesQuery && servicesQuery.getServices);
   }, [loading]);
   return (
      <Router>
         {/* <Navbar /> */}
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-service" component={AddService} />
            <Route exact path="/make-admin" component={MakeAdmin} />
            <Route exact path="/services" component={ServiceList} />
            <Route exact path="/add-order" component={AddOrder} />
         </Switch>
         {/* <Footer /> */}
      </Router>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
   services: state.service.services,
});

export default connect(mapStateToProps, { getOrders, getServices })(App);
