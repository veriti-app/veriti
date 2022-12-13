const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    charities: [Charity]!
  }

  type Charity {
    _id: ID
    name: String
    location: String
    mission: String
    link: String
    ein: String
    categories: [Category]!
  }

  type Donation {
    _id: ID
    donationAmount: Number!
    donationDate: Date
    user: User!
    charity: Charity!
  }

  type Portfolio {
    _id: ID
    user: User!
    charities: [Charity]
    categories: [Category]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Query {
    charity(_id: ID!): Charity
    charities: [Charity]
    portfolio(_id: ID!): Portfolio
    donations: [Donation]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDonation(charity: ID!, portfolio: ID!): Donation
    login(email: String!, password: String!): Auth
    saveCharity(portfolio: ID!, charity: ID!): Portfolio
    unsaveCharity(portfolio: ID!, charity: ID!): Portfolio
  }
`;

module.exports = typeDefs;
