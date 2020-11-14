import gql from "graphql-tag";

export const GET_ADMINS = gql`
   query getAdmins {
      getAdmins {
         id
         email
      }
   }
`;

/// Admin
export const ADD_ADMIN = gql`
   mutation AddAdmin($email: String!) {
      addAdmin(email: $email) {
         id
         email
      }
   }
`;

export const ADMIN_QUERY = gql`
   query GetAdmins {
      getAdmins {
         id
         email
      }
   }
`;
