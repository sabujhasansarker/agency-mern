// Database
const db = require("./config/db");
db();

// GraphQL
const { ApolloServer } = require("apollo-server");

// type define
const gql = require("graphql-tag");
const typeDefs = gql`
   type Query {
      sayHi: String!
   }
`;

// Query data
const resolvers = {
   Query: {
      sayHi: () => "Hello World",
   },
};

const server = new ApolloServer({
   typeDefs,
   resolvers,
});

// port
server
   .listen({ port: process.env.PORT || 5000 })
   .then((res) => console.log(`Server is running at ${res.url}`));
