import React from "react";
import phn from "../../images/iphone.png";

const Service = () => {
   const data = [1, 2, 3, 4];
   return (
      <section className="service">
         <h2>
            Provide awesome <span>services</span>
         </h2>
         <div className="slider-container">
            {data.map((d, i) => (
               <div className="single-slider" key={i}>
                  <img src={phn} alt="" />
                  <h4>Web & Mobile design</h4>
                  <p>
                     We craft stunning and amazing web UI, using a well drrafted
                     UX to fit your product.
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Service;
