import React, { useEffect, Fragment } from "react";
// Redux
import { connect } from "react-redux";
import { getOrders } from "./action/order";
// GraphQL
import { GET_ORDERS_QUERY } from "./graphQl/order";
import { useQuery } from "@apollo/react-hooks";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = ({ getOrders, orders }) => {
   const { loading, data } = useQuery(GET_ORDERS_QUERY);
   useEffect(() => {
      data && getOrders(data && data.getOrders);
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

export default connect(mapStateToProps, { getOrders })(App);
