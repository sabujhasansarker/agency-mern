import gql from "graphql-tag";

export const GET_SERVICES = gql`
   query {
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
