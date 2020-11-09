import React, { useEffect } from "react";

/// Redux
import { connect } from "react-redux";
import { getOrders } from "./action/order";
import { getServices } from "./action/service";
import { getUser } from "./action/auth";

/// GraphQL
import { GET_ORDERS_QUERY } from "./graphQl/order";
import { GET_SERVICES } from "./graphQl/service";
import { useQuery } from "@apollo/react-hooks";

/// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Components
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import AddService from "./components/pages/AddService";
import MakeAdmin from "./components/pages/MakeAdmin";
import ServiceList from "./components/pages/ServiceList";
import AddOrder from "./components/pages/AddOrder";
import Review from "./components/pages/Review";
import OrderList from "./components/pages/OrderList";

const App = ({ getOrders, getServices, orders, services, getUser, auth }) => {
   const { data: ordersQuery } = useQuery(GET_ORDERS_QUERY);
   const { loading, data: servicesQuery } = useQuery(GET_SERVICES);
   useEffect(() => {
      ordersQuery && getOrders(ordersQuery && ordersQuery.getOrders);
      servicesQuery && getServices(servicesQuery && servicesQuery.getServices);
      !auth && getUser();
   }, [loading]);

   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-service" component={AddService} />
            <Route exact path="/make-admin" component={MakeAdmin} />
            <Route exact path="/services" component={ServiceList} />
            <Route exact path="/add-order" component={AddOrder} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/order-list" component={OrderList} />
         </Switch>
      </Router>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
   services: state.service.services,
   auth: state.auth.auth,
});

export default connect(mapStateToProps, { getOrders, getServices, getUser })(
   App
);
