require('dotenv').config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { typeDefs, resolvers } = require("../server/schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(STRIPE_KEY);
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

// Create a PaymentIntent with the order amount and currency
const paymentIntent = await stripe.paymentIntents.create({
  amount: calculateOrderAmount(items),
  currency: "usd",
  automatic_payment_methods: {
    enabled: true,
  },
});

res.send({
  clientSecret: paymentIntent.client_secret,
});
});


// Call the async function to start the server
startApolloServer(typeDefs, resolvers);