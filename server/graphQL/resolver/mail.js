const { GraphQLError } = require("graphql");
const nodemailer = require("nodemailer");
const config = require("config");

module.exports = {
   Query: {},
   Mutation: {
      async sendMail(_, { email, name, message }) {
         try {
            let transporter = nodemailer.createTransport({
               service: "gmail",
               port: 554,
               secure: false,
               auth: {
                  user: config.get("email"),
                  pass: config.get("pass"),
               },
            });
            let mailOptions = [
               {
                  from: config.get("email"),
                  to: email,
                  subject: `Thanks ${name}`,
                  html: `
                       <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
                       <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
                       <p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
                       <p class="site-footer__fineprint" id="fineprint">Copyright ©2020 | All Rights Reserved</p>`,
               },
               // Sent me
               {
                  from: config.get("email"),
                  to: config.get("email"),
                  subject: `Email sent from ${email}`,
                  html: `${message} ${name}`,
               },
            ];

            mailOptions.map((mailO) => {
               transporter.sendMail(mailO, function (error, info) {
                  if (error) {
                     console.log(error);
                     return "Mail dose not sent";
                  } else {
                     console.log("Email sent: " + info.response);
                     return "Mail sent";
                  }
               });
            });
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
