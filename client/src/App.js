import React from "react";
import { gql, useQuery } from "@apollo/client";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const getOrders = gql`
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

function App() {
   const { loading, error, data } = useQuery(getOrders);

   if (loading) return "Loading...";
   console.log(data.getOrders);
   return (
      <Provider store={store}>
         <div className="App">
            <header className="App-header">
               <h1>Hello</h1>
            </header>
         </div>
      </Provider>
   );
}

export default App;
