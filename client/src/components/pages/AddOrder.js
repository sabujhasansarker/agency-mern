import React from "react";
import ClientNav from "../template/ClientNav";
import upload from "../../images/upload.png";

const AddOrder = () => {
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
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input type="email" placeholder="Your email address" />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input type="text" placeholder="Graphic Design" />
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
                        <img src={upload} alt="" />
                        <p>Upload image</p>
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

export default AddOrder;
