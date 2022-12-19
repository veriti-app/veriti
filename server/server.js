import express, { urlencoded, json } from "express";
require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { join } from "path";
import { typeDefs, resolvers } from "../server/schemas";
import { once } from "./config/connection";
import { authMiddleware } from "./utils/auth";
const STRIPE_KEY = process.env.STRIPE_SECRET;
const stripe = require("stripe")(STRIPE_KEY);

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(urlencoded({ extended: false }));
app.use(json());

if (process.env.NODE_ENV === "production") {
  app.use(static(join(__dirname, "../client/build")));
}

// Stripe Integration
app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: 2000,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
