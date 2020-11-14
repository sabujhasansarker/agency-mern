import React from "react";

const Alert = ({ alert }) => {
   return (
      <p
         className={`alert text-center ${
            alert && alert.error ? "alert-error" : ""
         }`}
      >
         {alert && alert.msg}
      </p>
   );
};

export default Alert;
