import React, { useState } from "react";
import phn from "../../images/iphone.png";

const Service = () => {
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
   ];
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
               {active !== 0 && <p onClick={() => left()}>Left</p>}
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
                        <img src={d.icon} alt="" />
                        <h4>{d.name}</h4>
                        <p>{d.text}</p>
                     </div>
                  ))}
               </div>
               {data.length !== active + 1 && (
                  <p onClick={() => right()}>right</p>
               )}
            </div>
         </div>
      </section>
   );
};

export default Service;
