const { GraphQLNonNull, GraphQLString } = require("graphql");
const { authors } = require("../../data");
const { AuthorType } = require("../../data/types");

const addAuthor = {
  type: AuthorType,
  description: "Add Author",
  args: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (parent, args) => {
    const author = { id: authors.length + 1, name: args.name };
    authors.push(author);
    return author;
  },
};

module.exports = {
  addAuthor,
};
