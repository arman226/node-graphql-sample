const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const { books: allBooks, authors: allAuthors } = require("./index");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents a author of a book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return allBooks.filter((book) => book.authorId === author.id);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => {
        return allAuthors.find((author) => author.id === book.authorId);
      },
    },
  }),
});

module.exports = { AuthorType, BookType };
