import React, { useState } from "react";
import ClientNav from "../template/ClientNav";
import upload from "../../images/upload.png";

/// redux
import { connect } from "react-redux";
import { getService } from "../../action/service";
import { addOrder } from "../../action/order";

/// GraphQl
import { useMutation } from "@apollo/react-hooks";
import { ADD_ORDER, GET_ORDERS_QUERY } from "../../graphQl/order";

/// firebase
import { storage } from "../../firebase";
import Alert from "../layout/Alert";

const AddOrder = ({
   auth: { displayName, email },
   service,
   match,
   addOrder,
}) => {
   /// Service id find
   const serviceId = match.params.serviceId;

   /// Add order
   const [AddOrder, {}] = useMutation(ADD_ORDER, {
      update(proxy, result) {
         const data = proxy.readQuery({
            query: GET_ORDERS_QUERY,
         });
         proxy.writeQuery({
            query: GET_ORDERS_QUERY,
            data,
         });

         /// Redux
         addOrder(result.data.addOrder);
      },
      onError(err) {
         console.log(err.graphQLErrors[0].message);
      },
   });

   /// form data define
   const [formData, setFormData] = useState({
      name: displayName,
      email,
      details: "",
      price: "",
   });
   const { details, price } = formData;
   const [alert, setAlert] = useState(null);
   const [file, setFile] = useState(null);

   /// file change
   const fileChange = (e) => {
      const reader = new FileReader();
      const fileName = e.target.files[0];
      reader.readAsDataURL(fileName);
      if (fileName) {
         reader.onloadend = (e) => {
            setFile(fileName);
         };
      }
   };

   /// Onchnage
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   /// clear alert
   const clearAlert = () => {
      setTimeout(() => {
         setAlert(null);
      }, 2000);
   };

   /// On submite
   const onSubmit = (e) => {
      e.preventDefault();
      if (!file || details === "" || price === "") {
         setAlert({ msg: "All filed are required ***", error: true });
         clearAlert();
      } else if (formData.price < 1) {
         setAlert({ msg: "please set minimum price for order", error: true });
         clearAlert();
      } else {
         storage
            .ref()
            .child(`/orders/${file.name}`)
            .put(file)
            .on("state_changed", async (snap) => {
               let d = await storage
                  .ref(`/orders/${file.name}`)
                  .getDownloadURL();
               var percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

               if (d && percentage >= 100) {
                  const finalData = {
                     name: formData.name,
                     email: formData.email,
                     details: formData.details,
                     price: formData.price,
                     process: true,
                     file: d,
                     serviceId: serviceId,
                  };

                  /// Add order
                  AddOrder({
                     variables: finalData,
                  });

                  /// Alert
                  setAlert({ msg: "Your order completed ***", error: false });
                  clearAlert();

                  setFormData({
                     name: displayName,
                     email,
                     details: "",
                     price: "",
                  });
               }
            });
      }
   };

   return (
      <div className="admin client">
         <ClientNav active="Add Order" />
         <div className="admin-content">
            {alert && <Alert alert={alert} />}
            <form className="form" onSubmit={(e) => onSubmit(e)}>
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
                        value={service ? service.title : ""}
                        disabled
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <textarea
                        placeholder="Project Details"
                        name="details"
                        value={details}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
               </div>
               <div className="form-group flex">
                  <div className="form-item">
                     <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={price}
                        onChange={(e) => onChange(e)}
                     />
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
                     <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => fileChange(e)}
                     />
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
   orders: state.order.orders,
});
export default connect(mapStateToProps, { getService, addOrder })(AddOrder);
