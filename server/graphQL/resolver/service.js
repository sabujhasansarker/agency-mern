const Service = require("../../models/Service");
const { GraphQLError } = require("graphql");
const Admin = require("../../models/Admin");

module.exports = {
   Query: {
      async getServices() {
         try {
            const services = await Service.find();
            console.log(await Admin.findById(services[0].admin.toString()));
            if (services.length > 0) {
               return services;
            } else {
               throw new GraphQLError("Service not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
   Mutation: {
      async addService(_, { title, icon, admin }) {
         try {
            const newService = new Service({
               title,
               icon,
               admin,
            });
            await newService.save();
            return newService;
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
