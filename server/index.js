const express = require("express");
const next = require("next");
//const { graphqlHTTP } = require("express-graphql");
//const { buildSchema, graphql } = require("graphql");
const { ApolloServer, gql } = require("apollo-server-express");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//resolvers
const { productQueries, productMutations } = require("./graphql/resolvers");

//types
const { productTypes } = require("./graphql/types");

app.prepare().then(() => {
  const server = express();

  //Construct a schema, using GRAPHQL schema language
  //const schema = buildSchema(`
  const typeDefs = gql(`
    ${productTypes}

    type Query {
      product(id: ID): Product
      products: [Product]
    }
    type Mutation {
      createProduct(input: ProductInput): Product
      updateProduct(id: ID, input: ProductInput): Product
      deleteProduct(id: ID): ID
    }
  `);

  // The root prov_ides a resolver for each API endpoint
  //const root = {
  const resolvers = {
    Query: {
      ...productQueries,
    },
    Mutation: {
      ...productMutations,
    },
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app: server });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
