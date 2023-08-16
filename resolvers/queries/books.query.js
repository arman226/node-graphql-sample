const { GraphQLInt, GraphQLList } = require("graphql");
const { books: allBooks } = require("../../data");
const { BookType } = require("../../data/types");

const book = {
  type: BookType,
  description: "A Single Book",
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (parent, args) => allBooks.find(({ id }) => id === args.id),
};

const books = {
  type: new GraphQLList(BookType),
  description: "List of Books",
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: () => allBooks,
};

module.exports = {
  book,
  books,
};
