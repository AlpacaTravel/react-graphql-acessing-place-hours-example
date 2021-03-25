import React from "react";
import { ApolloProvider } from "@apollo/client";

import client from "../client";
import Place from "./place";

function App() {
  return (
    <ApolloProvider client={client}>
      <Place />
    </ApolloProvider>
  );
}

export default App;
