const { Category, Charity, Donation, Portfolio, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  // QUERY
  Query: {
    // GET one Charity, based on charity id
    charity: async (parent, { charityId }) => {
      return Charity.findOne({ _id: charityId });
    },

    // GET all Charities
    charities: async () => {
      return Charity.find();
    },

    // GET one Portfolio
    portfolio: async (parent, { portfolioId }) => {
      return Portfolio.findOne({ _id: portfolioId });
    },

    // GET all Donations
    donations: async () => {
      return Donation.find();
    },
  },

  // MUTATIONS
  Mutation: {
    // POST new user *** Do we reference AUTH here? TODO: Vaishali check?:)
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // POST new Donation *** Do we reference charity here? I feel like this one is not correct?
    // We might need to use context: Check 22-State, 22-Stu_Typedefs
    createDonation: async (parent, { donationAmount, charityId, userId }) => {
      return Donation.create({ donationAmount, charityId, userId });
    },

    // PUT login *** TODO: Vaishali?:)
    login: async () => {},

    // PUT to portfolio (saving a charity to portfolio)
    saveCharity: async (parent, { charityId, portfolioId }) => {
      return Portfolio.findOneAndUpdate(
        { _id: portfolioId },
        {
          $addToSet: { charities: { charityId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    // DELETE from portfolio (unsaving)
    unsaveCharity: async (parent, { charityId, portfolioId }) => {
      return Portfolio.findOneAndUpdate(
        { _id: portfolioId },
        { $pull: { charities: { _id: charityId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
