import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from "@apollo/client";

import { GRAPHQL_API_URL, GRAPHQL_ACCESS_TOKEN } from "./config";

export default new ApolloClient({
  uri: `${GRAPHQL_API_URL}?accessToken=${GRAPHQL_ACCESS_TOKEN}`,
  cache: new InMemoryCache({
    dataIdFromObject(responseObject) {
      switch (responseObject.__typename) {
        case "RouteSegment": {
          return defaultDataIdFromObject(responseObject);
        }
        default:
          return defaultDataIdFromObject(responseObject);
      }
    },
    typePolicies: {
      Position: {
        keyFields: ["lon", "lat"],
      },
    },
  }),
});
