import React from "react";
import Slider from "react-slick";

const Work = () => {
   const settings = {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      centerPadding: "0px",
      speed: 500,
      dots: true,
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
   const works = [
      { src: "https://i.ibb.co/S6dTNdQ/Rectangle-16.png" },
      { src: "https://i.ibb.co/S6dTNdQ/Rectangle-16.png" },
      { src: "https://i.ibb.co/S6dTNdQ/Rectangle-16.png" },
      { src: "https://i.ibb.co/S6dTNdQ/Rectangle-16.png" },
   ];
   return (
      <div className="work">
         <div className="container">
            <div className="heading">
               Here are some of <span>our works</span>
            </div>

            <Slider {...settings}>
               {works.map((work, index) => (
                  <div className="single" ke={index}>
                     <img src={work.src} alt="" />
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default Work;
