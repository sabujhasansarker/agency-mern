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
      #Order
      getOrders: [Order]
      getOrder(orderId: ID!): Order
      #Admin
      getAdmins: [Admin]
      getAdmin(email: String!): Admin
   }
   # Mutation
   type Mutation {
      # Order
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
      #Admin
      addAdmin(email: String!): Admin
   }
`;
