import React from "react";
import ClientNav from "../template/ClientNav";
import upload from "../../images/upload.png";

/// redux
import { connect } from "react-redux";
import { getService } from "../../action/service";

/// GraphQl
import { useQuery } from "@apollo/react-hooks";
import { GET_SERVICE } from "../../graphQl/service";

const AddOrder = ({
   auth: { displayName, email },
   service,
   match,
   getService,
}) => {
   const serviceId = match.params.order_id;
   const { data } = useQuery(GET_SERVICE, {
      variables: { serviceId },
   });
   if (data) {
      getService(data && data.getService);
   }
   return (
      <div className="admin client">
         <ClientNav active="Add Order" />
         <div className="admin-content">
            <form className="form">
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="text"
                        placeholder="Your name / company’s name"
                        value={displayName}
                        disabled
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        disabled
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="text"
                        placeholder="Graphic Design"
                        value={service && service.title}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <textarea placeholder="Project Details" />
                  </div>
               </div>
               <div className="form-group flex">
                  <div className="form-item">
                     <input type="text" placeholder="Price" />
                  </div>
                  <div className="form-item">
                     <label htmlFor="image" className="image">
                        <img
                           src={upload}
                           alt=""
                           style={{ marginRight: "10px" }}
                        />{" "}
                        <p> Upload project file</p>
                     </label>
                     <input type="file" name="image" id="image" />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input type="submit" value="Send" />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};
const mapStateToProps = (state) => ({
   auth: state.auth.auth,
   service: state.service.service,
});
export default connect(mapStateToProps, { getService })(AddOrder);
