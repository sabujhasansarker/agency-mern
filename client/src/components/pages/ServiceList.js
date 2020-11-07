import React from "react";
import AdminNav from "../template/AdminNav";

const ServiceList = () => {
   return (
      <div className="admin">
         <AdminNav active="Service List" />
         <div className="admin-content">
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Service</th>
                     <th>Project Details</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Sufi Ahmed Hamim</td>
                     <td>sufi@gmail.com</td>
                     <td>Graphic Design</td>
                     <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </td>
                     <td>
                        <select style={{ color: "#FF4545" }}>
                           <option value="pending" style={{ color: "#FF4545" }}>
                              Pending
                           </option>
                           <option value="done" style={{ color: "#009444" }}>
                              Done
                           </option>
                        </select>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ServiceList;
