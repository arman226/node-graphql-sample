const booksQueries = require("./queries/books.query");
const authorsQueries = require("./queries/authors.query");
const booksMutation = require("./mutators/books.mutator");
const authorsMutation = require("./mutators/authors.mutator");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({ ...booksQueries, ...authorsQueries }),
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({ ...booksMutation, ...authorsMutation }),
});

const resolvers = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = resolvers;
