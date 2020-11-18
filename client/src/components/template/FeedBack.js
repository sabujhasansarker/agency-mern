import React from "react";

import Slider from "react-slick";

/// Redux
import { connect } from "react-redux";

const FeedBack = ({ reviews }) => {
   const settings = {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      centerPadding: "0px",
      dots: false,
      adaptiveHeight: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: true,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 513,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               centerPadding: "30px",
            },
         },
      ],
   };
   return (
      <div className="feedback" id="feedback">
         <div className="container">
            <h2 className="heading">
               Clients <span>Feedback</span>
            </h2>
            <Slider settings {...settings}>
               {reviews &&
                  reviews.map((review, i) => (
                     <div className="client-container" key={i}>
                        <div className="client">
                           <div className="client-header">
                              <img src={review.photo} alt="" />
                              <div className="client-name">
                                 <h4>{review.displayName}</h4>
                                 <p>{review.designation}</p>
                              </div>
                           </div>
                           <p>{review.des}</p>
                        </div>
                     </div>
                  ))}
            </Slider>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   reviews: state.review.reviews,
});

export default connect(mapStateToProps, {})(FeedBack);
