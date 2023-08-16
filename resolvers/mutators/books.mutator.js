const { GraphQLString, GraphQLNonNull, GraphQLInt } = require("graphql");
const { books } = require("../../data");
const { BookType } = require("../../data/types");

const addBook = {
  type: BookType,
  description: "Add a Book",
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
  },
  resolve: (parent, args) => {
    const book = {
      id: books.length + 1,
      name: args.name,
      authorId: args.authorId,
    };
    books.push(book);
    return book;
  },
};

module.exports = {
  addBook,
};
