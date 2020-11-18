import React, { useState } from "react";
import AdminNav from "../template/AdminNav";

/// redux
import { connect } from "react-redux";
import { addAdmin } from "../../action/auth";

/// GraphQl
import { useMutation } from "@apollo/react-hooks";
import { ADD_ADMIN, ADMIN_QUERY } from "../../graphQl/auth";

/// component
import Alert from "../layout/Alert";

const MakeAdmin = ({ admins, addAdmin }) => {
   const [formData, setFormData] = useState({ email: "" });
   const [alert, setAlert] = useState(null);

   /// Add order
   const [AddAdmin] = useMutation(ADD_ADMIN, {
      update(proxy, result) {
         const data = proxy.readQuery({
            query: ADMIN_QUERY,
         });
         proxy.writeQuery({
            query: ADMIN_QUERY,
            data,
         });
         /// Redux
         addAdmin(result.data.addAdmin);
      },
      onError(err) {
         console.log(err.graphQLErrors[0].message);
      },
   });

   const onChange = (e) => setFormData({ email: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (admins.find((admin) => admin.email === formData.email)) {
         setAlert({ msg: "This email already exits", error: true });
         clearAlert();
      } else {
         AddAdmin({ variables: formData });
         setAlert({ msg: "Add new admin", error: false });
         clearAlert();
      }
   };

   const clearAlert = () => {
      setTimeout(() => {
         setAlert(null);
      }, 2000);
   };

   return (
      <div className="make-admin admin">
         <AdminNav active="Make Admin" />
         <div className="admin-content">
            {alert && <Alert alert={alert} />}
            <form action="" className="form" onSubmit={(e) => onSubmit(e)}>
               <div className="form-group flex">
                  <div className="form-item">
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        placeholder="jon@gamil.com"
                        value={formData.admin}
                        onChange={(e) => onChange(e)}
                        required
                     />
                  </div>
                  <input type="submit" value="Submit" />
               </div>
            </form>
         </div>
      </div>
   );
};
const mapStateToProps = (state) => ({
   admins: state.auth.admins,
});
export default connect(mapStateToProps, { addAdmin })(MakeAdmin);
