const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");

const {
  productQueries,
  productMutations,
  userMutations,
  userQueries,
} = require("./resolvers");
const { productTypes, userTypes } = require("./types");
const { buildAuthContext } = require("./context");

const Product = require("./models/Product");
const User = require("./models/User");

exports.createApolloServer = () => {
  //Construct a schema, using GRAPHQL schema language
  //const schema = buildSchema(`
  const typeDefs = gql(`
    ${productTypes}
    ${userTypes}

    type Query {
      product(id: ID): Product
      products: [Product]
      user: User
    }
    type Mutation {
      createProduct(input: ProductInput): Product
      updateProduct(id: ID, input: ProductInput): Product
      deleteProduct(id: ID): ID

      signUp(input: SignUpInput): String
      signIn(input: SignInInput): User
      signOut: Boolean

    }
  `);

  // The root prov_ides a resolver for each API endpoint
  //const root = {
  const resolvers = {
    Query: {
      ...productQueries,
      ...userQueries,
    },
    Mutation: {
      ...productMutations,
      ...userMutations,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        Product: new Product(mongoose.model("Product"), req.user),
        User: new User(mongoose.model("User")),
      },
    }),
  });
  return apolloServer;
};
