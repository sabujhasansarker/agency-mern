import React from "react";
import Slider from "react-slick";
import phn from "../../images/iphone.png";

/// Redux
import { connect } from "react-redux";

const Service = ({ services }) => {
   const settings = {
      slidesToShow: 3,
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
   const data = [
      {
         name: "Demo 1",
         text:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
         icon: phn,
      },
      {
         name: "Demo 2",
         text:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
         icon: phn,
      },
      {
         name: "Demo 3",
         text:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
         icon: phn,
      },
      {
         name: "Demo 4",
         text:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
         icon: phn,
      },
      {
         name: "Demo 5",
         text:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
         icon: phn,
      },
   ];
   return (
      <section className="service">
         <div className="container">
            <h2 className="heading">
               Provide awesome <span>services</span>
            </h2>
            <div>
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
            </div>
         </div>
      </section>
   );
};

const mapStateToProps = (state) => ({
   services: state.service.services,
});

export default connect(mapStateToProps, {})(Service);
