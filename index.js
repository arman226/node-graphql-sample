const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();

const resolvers = require("./resolvers");

app.use(
  "/graphql",
  expressGraphQL.graphqlHTTP({
    graphiql: true,
    schema: resolvers,
  })
);
app.listen(5001, () => {
  console.log("Check");
});
