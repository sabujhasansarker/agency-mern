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
      process: Boolean!
      file: String
   }
   # query
   type Query {
      getOrders: [Order]
      getOrder(orderId: ID!): Order
   }
   # Mutation
   type Mutation {
      addOrder(
         name: String!
         email: String!
         details: String!
         price: String!
         process: Boolean!
         file: String
      ): Order
      updateOrder(process: Boolean, orderId: ID!): Order
      deleteOrder(orderId: ID!): String!
   }
`;
