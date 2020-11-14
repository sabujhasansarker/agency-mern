import React, { useState } from "react";
import AdminNav from "../template/AdminNav";
import upload from "../../images/upload.png";

/// redux
import { connect } from "react-redux";

/// grraphql
import { useMutation } from "@apollo/react-hooks";

/// firebase
import { storage } from "../../firebase";

/// fileChange
import { fileChange, fileSave } from "../../utilities/file";

const AddService = () => {
   const [formData, setFormData] = useState({
      title: "",
      dec: "",
      icon: "",
      admin: "",
   });
   const [file, setFile] = useState(null);
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      // setFormData({ ...formData, icon: fileSave(file) });
      console.log(fileSave(file));
   };

   return (
      <div className="admin">
         <AdminNav active="Add Service" />
         <div className="add-service admin-content">
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
                        onChange={(e) => setFile(fileChange(e))}
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

export default connect(null, {})(AddService);
