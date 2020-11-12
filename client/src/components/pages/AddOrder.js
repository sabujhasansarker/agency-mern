import React, { useState } from "react";
import ClientNav from "../template/ClientNav";
import upload from "../../images/upload.png";

/// redux
import { connect } from "react-redux";
import { getService } from "../../action/service";

/// GraphQl
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_SERVICE } from "../../graphQl/service";
import { ADD_ORDER } from "../../graphQl/order";

/// firebase
import { storage } from "../../firebase";
const AddOrder = ({
   auth: { displayName, email },
   service,
   match,
   getService,
}) => {
   /// Service id find
   const serviceId = match.params.serviceId;

   /// services query
   const { data } = useQuery(GET_SERVICE, {
      variables: { serviceId },
   });

   /// data pass on redux
   if (data) {
      getService(data && data.getService);
   }

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
   const [complete, setComplete] = useState(1);

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

   /// Add order
   const [AddOrder, {}] = useMutation(ADD_ORDER);

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
         console.log("not ok");
         storage
            .ref()
            .child(`/orders/${file.name}`)
            .put(file)
            .on("state_changed", async (snap) => {
               let d = await storage
                  .ref(`/orders/${file.name}`)
                  .getDownloadURL();
               setFormData({ ...formData, file: d });
               setComplete(complete + 1);
               setTimeout(() => {
                  setComplete(complete + 1);
                  setFormData({
                     name: displayName,
                     email,
                     details: "",
                     price: "",
                  });
               }, 1000);
            });
      }
   };

   /// Add order
   if (formData.file && complete === 1) {
      AddOrder({
         variables: {
            name: formData.name,
            email: formData.email,
            details: formData.details,
            price: formData.price,
            process: true,
            file: formData.file,
            serviceId: serviceId,
         },
      });

      /// Alert
      setAlert({ msg: "Your order completed ***", error: false });
      clearAlert();
   }

   return (
      <div className="admin client">
         <ClientNav active="Add Order" />
         <div className="admin-content">
            {alert && (
               <p
                  className={`alert text-center ${
                     alert.error ? "alert-error" : ""
                  }`}
               >
                  {alert.msg}
               </p>
            )}
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
export default connect(mapStateToProps, { getService })(AddOrder);
