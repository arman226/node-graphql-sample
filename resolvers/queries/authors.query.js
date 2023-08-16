const { GraphQLInt, GraphQLList } = require("graphql");
const { authors: allAuthors } = require("../../data");
const { AuthorType } = require("../../data/types");

const author = {
  type: AuthorType,
  description: "A single author",
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (parent, args) => allAuthors.find(({ id }) => id === args.id),
};

const authors = {
  type: new GraphQLList(AuthorType),
  description: "List of Authors",
  args: { id: { type: GraphQLInt } },
  authors: () => allAuthors,
};

module.exports = { author, authors };
