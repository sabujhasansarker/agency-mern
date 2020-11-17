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
                        <tr key={service.id}>
                           <td>{service.title}</td>
                           <td>{service.admin && service.admin.email}</td>
                           <td>{service.orders && service.orders.length}</td>
                           <td>{service.dec}</td>
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
