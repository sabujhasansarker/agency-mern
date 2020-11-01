import React, { useState } from "react";
import phn from "../../images/iphone.png";

const Service = () => {
   const data = [1, 2, 3, 4];
   const [active, setActive] = useState(1);
   const left = () => {
      setActive(active - 1);
   };
   const right = () => {
      setActive(active + 1);
   };
   return (
      <section className="service">
         <div className="container">
            <h2>
               Provide awesome <span>services</span>
            </h2>
            <div className="slider-container">
               {data.length > active && <p onClick={() => left()}>Left</p>}
               <div className="slider-section">
                  {data.map((d, i) => (
                     <div
                        className={`single-slider ${
                           active === i ? "active" : ""
                        } ${active + 1 === i ? "active-right" : ""} ${
                           active - 1 === i ? "active-left" : ""
                        } ${active - 1 > i ? "deactive-right" : ""} ${
                           active + 1 < i ? "deactive-left" : ""
                        }`}
                        key={i}
                     >
                        <img src={phn} alt="" />
                        <h4>Web & Mobile design</h4>
                        <p>
                           We craft stunning and amazing web UI, using a well
                           drrafted UX to fit your product.
                        </p>
                     </div>
                  ))}
               </div>
               <p onClick={() => right()}>right</p>
            </div>
         </div>
      </section>
   );
};

export default Service;
