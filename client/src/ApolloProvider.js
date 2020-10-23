import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const client = new ApolloClient({
   uri: "https://agency-merng.herokuapp.com/",
   cache: new InMemoryCache(),
});

export default (
   <ApolloProvider client={client}>
      <Provider store={store}>
         <App />
      </Provider>
   </ApolloProvider>
);
