const orderResolvers = require("./order");
const adminResolvers = require("./admin");
const serviceResolvers = require("./service");

module.exports = {
   // add & edit
   Mutation: {
      ...orderResolvers.Mutation,
      ...adminResolvers.Mutation,
      ...serviceResolvers.Mutation,
   },
   // query
   Query: {
      ...orderResolvers.Query,
      ...adminResolvers.Query,
      ...serviceResolvers.Query,
   },
};
