import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `https://${process.env.NEXT_PUBLIC_GRAPHQL_HOST_PATHNAME}`,
  documents: ["src/graphql/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
