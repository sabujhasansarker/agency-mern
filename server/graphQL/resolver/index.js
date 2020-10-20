const orderResolvers = require("./order");

module.exports = {
   // add & edit
   // query
   Query: {
      ...orderResolvers.Query,
   },
};
