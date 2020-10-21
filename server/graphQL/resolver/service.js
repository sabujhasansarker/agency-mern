const Service = require("../../models/Service");
const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getServices() {
         try {
            const services = await Service.find();
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
};
