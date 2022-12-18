const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    charities: [Charity]
    donations: [Donation]
    categories: [Category]
  }

  # declaring type Auth with it values
  type Auth {
    token: ID!
    user: User
  }

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
    imgLink: String
    ein: String
    categories: [Category]!
  }

  type Donation {
    _id: ID
    donationAmount: Float!
    donationDate: String!
    user: User!
    charity: Charity!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    charity(charityId: ID!): Charity
    charities: [Charity]
    donations: [Donation]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDonation(
      donationAmount: Float!
      donationDate: String!
      charity: ID!
    ): Donation
    saveCharity(charityId: ID!): User
    unsaveCharity(charityId: ID!): User
  }
`;

module.exports = typeDefs;
