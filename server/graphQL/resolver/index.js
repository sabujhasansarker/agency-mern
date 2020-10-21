const orderResolvers = require("./order");
const adminResolvers = require("./admin");

module.exports = {
   // add & edit
   Mutation: {
      ...orderResolvers.Mutation,
   },
   // query
   Query: {
      ...orderResolvers.Query,
      ...adminResolvers.Query,
   },
};
