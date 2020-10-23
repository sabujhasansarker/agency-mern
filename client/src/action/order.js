import { GET_ORDERS } from "./type";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const getOrders = () => {
   const ORDERS = gql`
      query getOrders {
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
   `;
   const { loading, data } = useQuery(ORDERS);
   console.log(data);
};
