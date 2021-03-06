import gql from "graphql-tag";

const query = `id title icon dec admin {email} orders{id}`;

export const GET_SERVICES = gql`
   query getServices {
      getServices {
       ${query}
      }
   }
`;

export const GET_SERVICE = gql`
   query($serviceId: ID!) {
      getService(serviceId: $serviceId) {
        ${query}
      }
   }
`;

export const SERVICE_ADD = gql`
   mutation AddService(
      $title: String!
      $icon: String!
      $dec: String!
      $admin: ID!
   ) {
      addService(title: $title, dec: $dec, icon: $icon, admin: $admin) {
        ${query}
      }
   }
`;

export const DELETE_SERVICE = gql`
   mutation DeleteService($serviceId: ID!) {
      deleteService(serviceId: $serviceId)
   }
`;
