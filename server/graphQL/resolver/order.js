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
   },
};
