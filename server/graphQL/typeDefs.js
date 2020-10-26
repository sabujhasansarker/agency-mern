const { gql } = require("apollo-server");

module.exports = gql`
   # Model like schema
   type Admin {
      id: ID!
      email: String!
   }
   type Service {
      id: ID!
      title: String!
      icon: String!
      admin: Admin!
   }
   type Order {
      id: ID!
      name: String!
      email: String!
      details: String!
      price: String!
      process: Boolean!
      file: String!
      service: Service!
   }
   type Mail {
      email: String!
      name: String!
      message: String!
   }
   # query
   type Query {
      #Order
      getOrders: [Order]
      getOrder(orderId: ID!): Order
      #Admin
      getAdmins: [Admin]
      getAdmin(email: String!): Admin
      #Service
      getServices: [Service]
      getService(serviceId: ID): Service
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
         serviceId: ID!
      ): Order
      updateOrder(process: Boolean, orderId: ID!): Order
      deleteOrder(orderId: ID!): String!
      #Admin
      addAdmin(email: String!): Admin
      #Service
      addService(title: String!, icon: String!, admin: ID!): Service
      deleteService(serviceId: ID!): String
      #Mail
      sendMail(email: String!, name: String!, message: String!): Mail!
   }
`;
