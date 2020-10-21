const Admin = require("../../models/Admin");
const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getAdmins() {
         try {
            const admins = await Admin.find();
            if (admins.length > 0) {
               return admins;
            } else {
               throw new GraphQLError("No admin found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async getAdmin(_, { email }) {
         try {
            const admin = await Admin.findOne({ email });
            if (admin) {
               return admin;
            } else {
               throw new GraphQLError("Admin dose not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
   Mutation: {
      async addAdmin(_, { email }) {
         try {
            let admin = await Admin.findOne({ email });
            console.log(admin);
            if (admin) {
               throw new GraphQLError("Admin already Added");
            } else {
               const newAdmin = new Admin({
                  name: "name",
                  email,
                  profilePic: "hello",
               });
               return newAdmin;
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
