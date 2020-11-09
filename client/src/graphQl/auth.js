import gql from "graphql-tag";

export const GET_ADMINS = gql`
   query getAdmins {
      getAdmins {
         id
         email
      }
   }
`;
