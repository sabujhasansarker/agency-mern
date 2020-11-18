import React from "react";

import banner from "../../images/banner.png";

const Banner = () => {
   return (
      <section className="banner" id="home">
         <div className="container">
            <div className="banner-left">
               <h1>Let’s Grow Your Brand To The Next Level</h1>
               <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  commodo ipsum duis laoreet maecenas. Feugiat
               </p>
               <a href="/" target="_blank" className="btn-primary">
                  Hire us
               </a>
            </div>
            <div className="banner-right">
               <img src={banner} alt="" />
            </div>
         </div>
      </section>
   );
};

export default Banner;
