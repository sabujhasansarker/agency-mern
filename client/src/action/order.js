import gql from 'graphql-tag';

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
