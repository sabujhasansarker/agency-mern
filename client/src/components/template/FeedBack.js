import React from "react";

import Slider from "react-slick";

const FeedBack = () => {
   const clients = [
      {
         name: "Nash Patrik",
         image: "https://i.ibb.co/HCy0JCz/Ellipse-90.png",
         designation: "CEO, Manpol",
         comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      },
      {
         name: "Nash Patrik",
         image: "https://i.ibb.co/HCy0JCz/Ellipse-90.png",
         designation: "CEO, Manpol",
         comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      },
      {
         name: "Nash Patrik",
         image: "https://i.ibb.co/HCy0JCz/Ellipse-90.png",
         designation: "CEO, Manpol",
         comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      },
      {
         name: "Nash Patrik",
         image: "https://i.ibb.co/HCy0JCz/Ellipse-90.png",
         designation: "CEO, Manpol",
         comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      },
   ];
   const settings = {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      centerPadding: "0px",
      speed: 500,
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
      <div className="feedback">
         <div className="container">
            <h2 className="heading">
               Clients <span>Feedback</span>
            </h2>
            <Slider settings {...settings}>
               {clients.map((client, i) => (
                  <div className="client-container" key={i}>
                     <div className="client">
                        <div className="client-header">
                           <img src={client.image} alt="" />
                           <div className="client-name">
                              <h4>{client.name}</h4>
                              <p>{client.designation}</p>
                           </div>
                        </div>
                        <p>{client.comment}</p>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default FeedBack;
