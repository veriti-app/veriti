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

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    charity(_id: ID!): Charity
    charities: [Charity]
    donations: [Donation]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addDonation(charity: ID!, user: ID!): Donation
    login(email: String!, password: String!): Auth
    saveCharity(user: ID!, charity: ID!): User
    unsaveCharity(user: ID!, charity: ID!): User
  }
`;

module.exports = typeDefs;
