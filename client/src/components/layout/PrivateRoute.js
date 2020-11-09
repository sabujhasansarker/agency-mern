import React from "react";

/// Redux
import { connect } from "react-redux";

/// Router
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
   return (
      <Route
         {...rest}
         render={(props) =>
            auth ? (
               <Component {...props} />
            ) : (
               <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
               />
            )
         }
      />
   );
};

const mapStateToProps = (state) => ({
   auth: state.auth.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
