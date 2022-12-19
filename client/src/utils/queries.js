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

// Added query to fetch all charities of user
export const QUERY_ME = gql`
  query Query {
    me {
      _id
      charities {
        _id
        link
        location
        ein
        mission
        name
        imgLink
      }
    }
  }
`;

export const SINGLE_CHARITY = gql`
  query Query($charityId: ID!) {
    charity(charityId: $charityId) {
      _id
      name
      link
      imgLink
      location
      ein
      mission
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
      link
      imgLink
      location
      mission
      name
      categories {
        _id
        name
      }
    }
  }
`;

export const USER_SUMMARY = gql`
  query Me {
    me {
      donations {
        donationAmount
        charity {
          categories {
            _id
          }
        }
      }
      categories {
        name
        _id
      }
    }
  }
`;

export const USER_DONATIONS = gql `
query Query {
  me {
    donations {
      charity {
        name
        ein
        _id
      }
      donationAmount
      donationDate
    }
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
