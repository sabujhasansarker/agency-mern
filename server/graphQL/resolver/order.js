const Order = require("../../models/Order");
const { GraphQLError } = require("graphql");
const { populate } = require("../../models/Order");

module.exports = {
   Query: {
      async getOrders() {
         try {
            const orders = await Order.find()
               .sort({ date: -1 })
               .populate({ path: "service", populate: { path: "admin" } })
               .exec();
            if (orders.length > 0) {
               return orders;
            } else {
               throw new GraphQLError("No order found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async getOrder(_, { orderId }) {
         try {
            const order = await Order.findById(orderId)
               .sort({ date: -1 })
               .populate({ path: "service", populate: { path: "admin" } })
               .exec();
            if (order) {
               return order;
            } else {
               throw new GraphQLError("No order found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
   Mutation: {
      async addOrder(
         _,
         { name, email, details, price, process, file, serviceId }
      ) {
         try {
            const findOrder = await Order.findOne({ file });
            if (!findOrder) {
               const newOrder = new Order({
                  name,
                  email,
                  details,
                  price,
                  process,
                  file,
                  service: serviceId,
               });
               await newOrder.save();
               const order = await Order.findById(newOrder)
                  .sort({ date: -1 })
                  .populate({ path: "service", populate: { path: "admin" } })
                  .exec();
               return order;
            } else {
               throw new GraphQLError("file already match");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async updateOrder(_, { process, orderId }) {
         try {
            const order = await Order.findByIdAndUpdate(
               orderId,
               { $set: { process } },
               { new: true }
            )
               .sort({ date: -1 })
               .populate({ path: "service", populate: { path: "admin" } })
               .exec();
            return order;
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
      async deleteOrder(_, { orderId }) {
         try {
            const order = await Order.findById(orderId);
            if (order) {
               await Order.findByIdAndDelete(orderId);
               return "delete order";
            } else {
               throw new GraphQLError("Order not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
