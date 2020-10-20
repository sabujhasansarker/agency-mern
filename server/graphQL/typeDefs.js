const { gql } = require("apollo-server");

module.exports = gql`
   # Model like schema
   type Service {
      id: ID!
      title: String!
      icon: String!
   }
   # query
   type Query {
      sayHi: String!
   }
`;
