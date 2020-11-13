import React, { useState } from "react";
import ClientNav from "../template/ClientNav";

/// Redux
import { connect } from "react-redux";
import { addReview } from "../../action/review";

/// GraphQl
import { useMutation } from "@apollo/react-hooks";
import { ADD_REVIEW, GET_REVIEW } from "../../graphQl/review";

const Review = ({ auth: { displayName, photoURL }, addReview }) => {
   /// GraphQl
   const [AddReview, {}] = useMutation(ADD_REVIEW, {
      update(proxy, result) {
         const data = proxy.readQuery({
            query: GET_REVIEW,
         });
         proxy.writeQuery({
            query: GET_REVIEW,
            data,
         });

         /// Redux
         addReview(result.data.addReview);
      },
      onError(err) {
         console.log(err.graphQLErrors[0].message);
      },
   });

   /// formdata
   const [formData, setFormData] = useState({
      displayName,
      photo: photoURL,
      designation: "",
      des: "",
   });

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      AddReview({ variables: formData });
   };

   return (
      <div className="admin client">
         <ClientNav active="Review" addOrderMenu={true} />
         <div className="admin-content">
            <form className="form" onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="text"
                        placeholder="Your name"
                        value={formData.displayName}
                        disabled
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="text"
                        placeholder="Company’s name, Designation"
                        name="designation"
                        value={formData.designation}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <textarea
                        placeholder="Description"
                        name="des"
                        value={formData.des}
                        onChange={(e) => onChange(e)}
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
});

export default connect(mapStateToProps, { addReview })(Review);
