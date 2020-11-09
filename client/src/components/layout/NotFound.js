import React from "react";

/// Router
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div className="notfound text-center">
         <h2>This page dose't found</h2>
         <Link to="/">Back to home</Link>
      </div>
   );
};

export default NotFound;
