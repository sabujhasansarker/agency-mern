const { gql } = require("apollo-server");

module.exports = gql`
   # Model like schema
   type Admin {
      id: ID!
      name: String!
      email: String!
      profilePic: String!
   }
   type Service {
      id: ID!
      title: String!
      icon: String!
      user: [Admin]
   }
   type Order {
      id: ID!
      name: String!
      email: String!
      details: String!
      price: String!
      file: String!
   }
   # query
   type Query {
      getOrders: [Order]
      getOrder(postId: ID!): Order
   }
`;
