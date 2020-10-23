import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { getOrders } from "../action/order";

const Home = ({ orders }) => {
   const getOrders = () => {
      const order = gql`
         {
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

      const { loading, data } = useQuery(order);
      console.log(loading);
   };

   return (
      <div>
         <h1>Hello this is home</h1>
      </div>
   );
};

const mapstatetoprops = (state) => ({
   orders: state.order.orders,
});

export default connect(mapstatetoprops, {})(Home);
