import gql from "graphql-tag";

export const GET_ORDERS_QUERY = gql`
   query getOrders {
      getOrders {
         id
         name
         service {
            id
            title
            icon
            admin {
               id
               email
            }
         }
      }
   }
`;

/// Add order
export const ADD_ORDER = gql`
   mutation AddOrder(
      $name: String!
      $email: String!
      $details: String!
      $price: String!
      $process: Boolean!
      $file: String!
      $serviceId: ID!
   ) {
      addOrder(
         name: $name
         email: $email
         details: $details
         price: $price
         process: $process
         file: $file
         serviceId: $serviceId
      ) {
         id
         name
         service {
            id
            title
            icon
            admin {
               id
               email
            }
         }
      }
   }
`;
