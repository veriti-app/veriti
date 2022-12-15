import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query Query {
    users {
      _id
      username
    }
  }
`;
export const SINGLE_USER = gql`
  query Query($userId: ID!) {
    user(userId: $userId) {
      _id
      username
    }
  }
`;
export const SINGLE_CHARITY = gql`
  query Query($id: ID!) {
    charity(_id: $id) {
      _id
      ein
      link
      location
      mission
      name
      categories {
        _id
      }
    }
  }
`;
export const ALL_CHARITIES = gql`
query Query {
  charities {
    _id
    ein
    imgLink
    link
    name
  }
}
`;
export const ALL_DONATIONS = gql`
  query Query {
    donations {
      _id
      donationAmount
      donationDate
      user {
        _id
        username
      }
      charity {
        _id
      }
    }
  }
`;
