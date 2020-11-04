import React from "react";

import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { googleLogin } from "../../action/auth";

import logo from "../../images/logo.png";
import google from "../../images/googleLogin.png";

const Login = ({ googleLogin }) => {
   return (
      <div className="login text-center">
         <div className="container">
            <Link to="/">
               <img src={logo} alt="" />
            </Link>
            <div className="login-content">
               <h2>Login With</h2>
               <div className="google" onClick={() => googleLogin()}>
                  <img src={google} alt="" />
                  <p>Continue with Google</p>
               </div>
               <p>
                  Don’t have an account?{" "}
                  <Link to="/registration">Create an account</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default connect(null, { googleLogin })(Login);
