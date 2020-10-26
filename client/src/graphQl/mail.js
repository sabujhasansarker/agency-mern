import gql from "graphql-tag";

export const MAIL_SENT = gql`
   mutation SendMail($email: String!, $name: String!, $message: String!) {
      sendMail(email: $email, name: $name, message: $message)
   }
`;
