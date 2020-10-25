import React from "react";

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="left">
               <h2>Let us handle your project, professionally.</h2>
               <p className="text">
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general.
               </p>
            </div>
            <div className="right">
               <form>
                  <div className="form-group">
                     <input type="email" placeholder="Your email address" />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        name="name"
                        placeholder="Your name / company’s name"
                     />
                  </div>
                  <div className="form-group">
                     <textarea name="message" placeholder="Your message" />
                  </div>
                  <div className="form-group">
                     <input
                        type="submit"
                        value="Send"
                        className="btn-primary"
                     />
                  </div>
               </form>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
