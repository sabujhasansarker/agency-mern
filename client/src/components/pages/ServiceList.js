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
                     <th style={{ width: "170px" }}>Title</th>
                     <th style={{ width: "170px" }}>Admin Email</th>
                     <th style={{ width: "133px" }}>Number of order</th>
                     <th style={{ width: "33%" }}>Details</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {services &&
                     services.map((service) => (
                        <tr key={service.id}>
                           <td style={{ width: "170px" }}>{service.title}</td>
                           <td style={{ width: "170px" }}>
                              {service.admin && service.admin.email}
                           </td>
                           <td style={{ width: "133px", textAlign: "center" }}>
                              {service.orders && service.orders.length}
                           </td>
                           <td style={{ width: "33%" }}>{service.dec}</td>
                           <td>
                              <div className="btn-delete">Delete</div>
                           </td>
                        </tr>
                     ))}
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
