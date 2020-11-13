import React from "react";
import ClientNav from "../template/ClientNav";

/// Redux
import { connect } from "react-redux";

const Review = ({ reviews }) => {
   console.log(reviews);
   return (
      <div className="admin client">
         <ClientNav active="Review" addOrderMenu={true} />
         <div className="admin-content">
            <form className="form">
               <div className="form-group">
                  <div className="form-item">
                     <input type="text" placeholder="Your name" />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <input
                        type="text"
                        placeholder="Company’s name, Designation"
                     />
                  </div>
               </div>
               <div className="form-group">
                  <div className="form-item">
                     <textarea placeholder="Description" />
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
   reviews: state.review.reviews,
});

export default connect(mapStateToProps, {})(Review);
