import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// server compoenents
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Entity: {
          keyFields: ["id"], // Assuming your entity has an 'id' field
          merge(existing, incoming) {
            // Here you can customize how incoming data merges with existing data
            return { ...existing, ...incoming };
          },
        },
      },
      dataIdFromObject: (object) => {
        // This function generates a unique identifier for each object in the cache
        return `${object.__typename}:${object.id || object._id}`;
      },
    }),
    link: new HttpLink({
      uri: "put your api endpoint here",
    }),
  });
});
