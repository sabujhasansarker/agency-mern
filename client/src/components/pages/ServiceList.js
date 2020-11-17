import React from "react";
import AdminNav from "../template/AdminNav";

/// redux
import { connect } from "react-redux";

const ServiceList = ({ services }) => {
   console.log(services);
   return (
      <div className="admin">
         <AdminNav active="Service List" />
         <div className="admin-content">
            <table>
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Admin Email</th>
                     <th>Number of order</th>
                     <th>Details</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {services &&
                     services.map((service) => (
                        <tr key={service.id}>{/* <td>{service.}</td> */}</tr>
                     ))}
                  <tr>
                     <td>Service Title</td>
                     <td>sufi@gmail.com</td>
                     <td>4</td>
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

const mapStateToProps = (state) => ({
   services: state.service.services,
});

export default connect(mapStateToProps, {})(ServiceList);
