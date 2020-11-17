const Service = require("../../models/Service");
const Order = require("../../models/Order");

const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getServices() {
         try {
            const services = await Service.find()
               .sort({ date: -1 })
               .populate("admin")
               .populate("orders")
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
               .populate("orders")
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
      async addService(_, { title, icon, admin, dec }) {
         try {
            const findService = await Service.find({ icon });
            if (findService) {
               const newService = new Service({
                  title,
                  icon,
                  admin,
                  dec,
               });
               await newService.save();
               const service = await Service.findById(newService)
                  .sort({ date: -1 })
                  .populate("admin")
                  .populate("orders")
                  .exec();
               return service;
            } else {
               throw new GraphQLError("Icon match");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async deleteService(_, { serviceId }) {
         try {
            let service = await Service.findById(serviceId);
            if (service) {
               service.orders.map(
                  async (s) => await Order.findByIdAndDelete(s)
               );
               await Service.findByIdAndDelete(serviceId);
               return "Service deleted";
            } else {
               throw new GraphQLError("Service not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
