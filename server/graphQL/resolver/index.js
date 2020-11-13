const orderResolvers = require("./order");
const adminResolvers = require("./admin");
const serviceResolvers = require("./service");
const mailResolvers = require("./mail");
const reviewResolvers = require("./review");

module.exports = {
   // add & edit
   Mutation: {
      ...orderResolvers.Mutation,
      ...adminResolvers.Mutation,
      ...serviceResolvers.Mutation,
      ...mailResolvers.Mutation,
      ...reviewResolvers.Mutation,
   },
   // query
   Query: {
      ...orderResolvers.Query,
      ...adminResolvers.Query,
      ...serviceResolvers.Query,
      ...reviewResolvers.Query,
   },
};
