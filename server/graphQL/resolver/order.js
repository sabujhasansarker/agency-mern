const Order = require("../../models/Order");

const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getOrders() {
         try {
            const orders = await Order.find();
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
            const order = await Order.findById(orderId);
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
      async addOrder(_, { name, email, details, price, process, file }) {
         try {
            const newOrder = new Order({
               name,
               email,
               details,
               price,
               process,
               file,
            });
            await newOrder.save();
            return newOrder;
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
            );
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
