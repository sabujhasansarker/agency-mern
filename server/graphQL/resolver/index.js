const orderResolvers = require("./order");

module.exports = {
   // add & edit
   Mutation: {
      ...orderResolvers.Mutation,
   },
   // query
   Query: {
      ...orderResolvers.Query,
   },
};
