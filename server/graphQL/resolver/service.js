const Service = require("../../models/Service");
const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getServices() {
         try {
            const services = await Service.find()
               .sort({ date: -1 })
               .populate("admin")
               .exec();
            if (services.length > 0) {
               return services;
            } else {
               throw new GraphQLError("Service not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async getService(_, { serviceId }) {
         try {
            const services = await Service.findById(serviceId)
               .sort({ date: -1 })
               .populate("admin")
               .exec();
            if (services) {
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
            const service = await Service.findById(newService)
               .sort({ date: -1 })
               .populate("admin")
               .exec();
            return service;
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async deleteService(_, { serviceId }) {
         try {
            let service = await Service.findById(serviceId);
            if (service) {
               await Service.findByIdAndDelete(serviceId);
               return new GraphQLError("Service deleted");
            } else {
               throw new GraphQLError("Service not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
