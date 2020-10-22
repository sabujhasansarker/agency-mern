import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
   uri: "https://agency-merng.herokuapp.com/",
   cache: new InMemoryCache(),
});

export default (
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>
);
