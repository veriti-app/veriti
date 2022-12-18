import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_DONATION = gql`
  mutation Mutation(
    $donationAmount: Float!
    $donationDate: String!
    $charity: ID!
  ) {
    addDonation(
      donationAmount: $donationAmount
      donationDate: $donationDate
      charity: $charity
    ) {
      _id
      charity {
        _id
        ein
        link
        location
        mission
        name
      }
      donationAmount
      donationDate
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_CHARITY = gql`
  mutation Mutation($charityId: ID!) {
    saveCharity(charityId: $charityId) {
      _id
      username
      categories {
        _id
      }
      charities {
        _id
      }
    }
  }
`;

// Updated mutation
export const UNSAVE_CHARITY = gql`
  mutation Mutation($charityId: ID!) {
    unsaveCharity(charityId: $charityId) {
      _id
      username
      categories {
        _id
      }
      charities {
        _id
      }
    }
  }
`;
