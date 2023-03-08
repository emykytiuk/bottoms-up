
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema.graphql',
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/types/": {
      preset: "client",
      plugins: []
    }
  },
  hooks: {
    afterAllFileWrite: 'prettier --write'
  }
};

export default config;
