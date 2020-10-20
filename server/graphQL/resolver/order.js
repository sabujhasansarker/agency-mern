const Order = require("../../models/Order");

const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getOrders() {
         try {
            const orders = await Order.find();
            if (orders.length > 0) {
               console.log(orders);
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
            a;
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
            const order = await Order.findById(orderId);
            return order;
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
