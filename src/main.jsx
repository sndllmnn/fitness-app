import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cko4j7ro2ig7j01yz5tfzd0fi/master", // richtige graphcms adresse einfügen
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
