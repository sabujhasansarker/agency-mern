import React from "react";
import AdminNav from "../template/AdminNav";
import upload from "../../images/upload.png";

const AddService = () => {
   return (
      <div className="admin">
         <AdminNav active="Add Service" />
         <div className="add-service admin-content">
            <form className="form">
               <div className="form-group flex">
                  <div className="from-item">
                     <label htmlFor="title">Service Title</label>
                     <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                     />
                  </div>
                  <div className="form-item">
                     <label htmlFor="image" className="image">
                        <img src={upload} alt="" />
                        <p>Upload image</p>
                     </label>
                     <input type="file" name="image" id="image" />
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="dec">Description</label>
                  <textarea
                     name="dec"
                     id="dec"
                     placeholder="Enter Designation"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddService;
