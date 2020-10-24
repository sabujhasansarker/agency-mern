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

const App = ({ getOrders, orders }) => {
   const { loading, data } = useQuery(GET_ORDERS_QUERY);
   useEffect(() => {
      data && getOrders(data && data.getOrders);
   }, [loading]);
   return (
      <Router>
         <Switch>
            <Route exact to="/" component={Home} />
         </Switch>
      </Router>
   );
};

const mapStateToProps = (state) => ({
   orders: state.order.orders,
});

export default connect(mapStateToProps, { getOrders })(App);
