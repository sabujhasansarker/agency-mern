import React, { Fragment } from "react";
import Banner from "../template/Banner";

// images
import slack from "../../images/slack.png";
import google from "../../images/google.png";
import uber from "../../images/uber.png";
import netflix from "../../images/netflix.png";
import airbnb from "../../images/airbnb.png";

const Home = () => {
   const clients = [
      { name: "slack", image: slack, url: "#" },
      { name: "google", image: google, url: "#" },
      { name: "uber", image: uber, url: "#" },
      { name: "netflix", image: netflix, url: "#" },
      { name: "airbnb", image: airbnb, url: "#" },
   ];
   return (
      <Fragment>
         <Banner />
         <section className="client">
            <div className="container">
               {clients.map((client, index) => (
                  <a href={client.url} key={index} className={client.name}>
                     <img src={client.image} alt={client.name} />
                  </a>
               ))}
            </div>
         </section>
      </Fragment>
   );
};

export default Home;
