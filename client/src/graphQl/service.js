import gql from "graphql-tag";

export const GET_SERVICES = gql`
   query getServices {
      getServices {
         id
         title
         icon
         dec
         admin {
            email
         }
      }
   }
`;

export const GET_SERVICE = gql`
   query($serviceId: ID!) {
      getService(serviceId: $serviceId) {
         icon
         title
      }
   }
`;
