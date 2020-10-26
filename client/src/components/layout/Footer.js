import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { MAIL_SENT } from "../../graphQl/mail";

const Footer = () => {
   const [formData, setFormData] = useState({
      email: "",
      name: "",
      message: "",
   });
   const [SendMail, { data }] = useMutation(MAIL_SENT);

   const { name, email, message } = formData;
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
   const onSubmit = (e) => {
      e.preventDefault();
      SendMail({ variables: { email, name, message } });
   };
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
               <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                     <input
                        type="email"
                        placeholder="Your email address"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        name="name"
                        placeholder="Your name / company’s name"
                        required
                        value={name}
                        onChange={(e) => onChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        value={message}
                        onChange={(e) => onChange(e)}
                     />
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
