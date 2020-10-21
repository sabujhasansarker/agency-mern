const Admin = require("../../models/Admin");

module.exports = {
   Query: {
      async getAdmin(_, { email }) {
         const admin = await Admin.findOne({ email });
         if (admin) {
            return admin;
         } else {
            throw new Error("Admin dose not found");
         }
      },
   },
};
