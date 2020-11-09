import React, { useEffect } from "react";

/// Redux
import { connect } from "react-redux";
import { getOrders } from "./action/order";
import { getServices } from "./action/service";
import { getUser, getAdmins } from "./action/auth";

/// GraphQL
import { useQuery } from "@apollo/react-hooks";
import { GET_ORDERS_QUERY } from "./graphQl/order";
import { GET_SERVICES } from "./graphQl/service";
import { GET_ADMINS } from "./graphQl/auth";

/// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/layout/PrivateRoute";

/// Components
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import AddService from "./components/pages/AddService";
import MakeAdmin from "./components/pages/MakeAdmin";
import ServiceList from "./components/pages/ServiceList";
import AddOrder from "./components/pages/AddOrder";
import Review from "./components/pages/Review";
import OrderList from "./components/pages/OrderList";

const App = ({
   getOrders,
   getServices,
   orders,
   services,
   getUser,
   auth,
   getAdmins,
   admins,
}) => {
   const { data: ordersQuery } = useQuery(GET_ORDERS_QUERY);
   const { data: servicesQuery } = useQuery(GET_SERVICES);
   const { loading, data: adminQuery } = useQuery(GET_ADMINS);
   useEffect(() => {
      getOrders(ordersQuery && ordersQuery.getOrders);
      getServices(servicesQuery && servicesQuery.getServices);
      getAdmins(adminQuery && adminQuery.getAdmins);
      !auth && getUser();
   }, [loading]);
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/add-service" component={AddService} />
            <PrivateRoute exact path="/make-admin" component={MakeAdmin} />
            <PrivateRoute exact path="/services" component={ServiceList} />
            <PrivateRoute exact path="/add-order" component={AddOrder} />
            <PrivateRoute exact path="/review" component={Review} />
            <PrivateRoute exact path="/order-list" component={OrderList} />
         </Switch>
      </Router>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
   services: state.service.services,
   auth: state.auth.auth,
   admins: state.auth.admins,
});

export default connect(mapStateToProps, {
   getOrders,
   getServices,
   getUser,
   getAdmins,
})(App);
