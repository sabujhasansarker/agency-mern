import React from "react";
import Slider from "react-slick";
import phn from "../../images/iphone.png";

/// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Service = ({ services }) => {
   const settings = {
      slidesToShow: services.length < 3 ? services.length : 3,
      centerMode: true,
      arrows: false,
      centerPadding: "0px",
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      responsive: [
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
      <section className="service">
         <div className="container">
            <h2 className="heading">
               Provide awesome <span>services</span>
            </h2>
            {services && services.length === 1 && services ? (
               services.map((d, i) => (
                  <Link
                     to={`/add-order/${d.id}`}
                     className="single-container"
                     key={i}
                  >
                     <div className="single-slider">
                        <img src={d.icon} alt="" />
                        <h3>{d.title}</h3>
                        <p>{d.dec}</p>
                     </div>
                  </Link>
               ))
            ) : (
               <Slider {...settings}>
                  {services &&
                     services.map((d, i) => (
                        <div key={i}>
                           <img src={d.icon} alt=" " />
                           <h3>{d.title}</h3>
                           <p>{d.dec}</p>
                        </div>
                     ))}
               </Slider>
            )}
         </div>
      </section>
   );
};

const mapStateToProps = (state) => ({
   services: state.service.services,
});

export default connect(mapStateToProps, {})(Service);
