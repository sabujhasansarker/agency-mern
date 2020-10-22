// Database
const db = require("./config/db");
db();

// GraphQL
const { ApolloServer } = require("apollo-server");

// type define
const typeDefs = require("./graphQL/typeDefs");

// Query data
const resolvers = require("./graphQL/resolver");

const server = new ApolloServer({
   typeDefs,
   resolvers,
   introspection: true,
   playground: true,
});

// port
server
   .listen({ port: process.env.PORT || 5000 })
   .then((res) => console.log(`Server is running at ${res.url}`));
