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
      dec: String!
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
   type Review {
      id: ID!
      displayName: String!
      designation: String!
      des: String!
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
      getReviews: [Review]
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
         file: String!
         serviceId: ID!
      ): Order
      updateOrder(process: Boolean, orderId: ID!): Order
      deleteOrder(orderId: ID!): String!
      #Admin
      addAdmin(email: String!): Admin
      #Service
      addService(
         title: String!
         icon: String!
         dec: String!
         admin: ID!
      ): Service
      deleteService(serviceId: ID!): String
      #Mail
      sendMail(email: String!, name: String!, message: String!): String
      #Add review
      addReview(displayName: String, designation: String, des: String): Review
   }
`;
