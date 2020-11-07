import React from "react";
import AdminNav from "../template/AdminNav";

const MakeAdmin = () => {
   return (
      <div className="make-admin admin">
         <AdminNav active="Make Admin" />
         <div className="admin-content">
            <form action="" className="form">
               <div className="form-group flex">
                  <div className="form-item">
                     <label htmlFor="email">Email</label>
                     <input type="email" placeholder="jon@gamil.com" />
                  </div>
                  <input type="submit" value="Submit" />
               </div>
            </form>
         </div>
      </div>
   );
};

export default MakeAdmin;
