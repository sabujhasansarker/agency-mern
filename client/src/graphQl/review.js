import gql from "graphql-tag";

export const ADD_REVIEW = gql`
   mutation AddReview(
      $displayName: String!
      $designation: String!
      $des: String!
      $photo: String!
   ) {
      addReview(
         displayName: $displayName
         designation: $designation
         des: $des
         photo: $photo
      ) {
         id
         displayName
         designation
         des
         photo
      }
   }
`;

export const GET_REVIEW = gql`
   query GetReview {
      getReviews {
         displayName
         designation
         des
         photo
      }
   }
`;
