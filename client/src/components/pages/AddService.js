import React, { useState } from "react";
import AdminNav from "../template/AdminNav";
import upload from "../../images/upload.png";

/// redux
import { connect } from "react-redux";

/// grraphql
import { useMutation } from "@apollo/react-hooks";
import { SERVICE_ADD, GET_SERVICE } from "../../graphQl/service";

/// firebase
import { storage } from "../../firebase";

/// fileChange
import { fileChange, fileSave } from "../../utilities/file";
import Alert from "../layout/Alert";

const AddService = ({ auth, admins }) => {
   /// find admin id
   const admin = admins && admins.find((admin) => admin.email == auth.email);

   /// Formdata
   const [formData, setFormData] = useState({
      title: "",
      dec: "",
      icon: "",
      admin: admin.id,
   });
   const [file, setFile] = useState(null);
   const [alert, setAlert] = useState(null);

   /// Add service
   const [AddService, {}] = useMutation(SERVICE_ADD, {
      update(proxy, result) {
         const data = proxy.readQuery({
            query: GET_SERVICE,
         });
         proxy.writeQuery({
            query: GET_SERVICE,
            data,
         });

         /// Redux
         // addOrder(result.data.addOrder);
         console.log(result.data);
      },
      onError(err) {
         console.log(err.graphQLErrors[0].message);
      },
   });

   /// file Change
   const onFileChange = (e) => {
      const fileName = fileChange(e, "png");
      setFormData({ ...formData, icon: fileName.fileName });
      setAlert(fileName.error);
      clearAlert();
   };

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (formData.title && formData.dec && formData.icon) {
         setAlert({ msg: "Save service successfully ***", error: false });
         fileSave(AddService, formData);
         clearAlert();
      } else {
         setAlert({ msg: "All field are requird ***", error: true });
         clearAlert();
      }
      // setFormData({ ...formData, icon: file && file });
   };

   const clearAlert = () => {
      setTimeout(() => {
         setAlert(null);
      }, 2000);
   };

   return (
      <div className="admin">
         <AdminNav active="Add Service" />
         <div className="add-service admin-content">
            {alert && <Alert alert={alert} />}
            <form className="form" onSubmit={(e) => onSubmit(e)}>
               <div className="form-group flex">
                  <div className="from-item">
                     <label htmlFor="title">Service Title</label>
                     <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        onChange={(e) => onChange(e)}
                        value={formData.title}
                     />
                  </div>
                  <div className="form-item">
                     <label htmlFor="image" className="image">
                        <img src={upload} alt="" />
                        <p>Upload image</p>
                     </label>
                     <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => onFileChange(e)}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="dec">Description</label>
                  <textarea
                     name="dec"
                     id="dec"
                     placeholder="Enter Designation"
                     onChange={(e) => onChange(e)}
                     value={formData.dec}
                  />
               </div>

               <input type="submit" value="Submit" />
            </form>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   admins: state.auth.admins,
   auth: state.auth.auth,
});

export default connect(mapStateToProps, {})(AddService);
