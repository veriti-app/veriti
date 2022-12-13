const { Category, Charity, Donation, Portfolio, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { findOneAndUpdate } = require("../models/Charity");

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
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // POST new Donation *** Do we reference charity here? I feel like this one is not correct?
    // We might need to use context: Check 22-State, 22-Stu_Typedefs
    addDonation: async (parent, { donationAmount, charity, user }, context) => {
      console.log(`context: ${context}`);
      if (context.user) {
        const donation = new Donation({ charity, donationAmount });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { donations: donation },
        });

        return donation;
      }

      throw new AuthenticationError("Not logged in!");
    },

    // PUT login *** TODO: Vaishali?:)
    login: async () => {},

    // PUT to portfolio (saving a charity to portfolio)
    saveCharity: async (parent, { charityId }, context) => {
      // find the charity data of one
      const charity = await Charity.findOne({ _id: charityId });
      const categoryIds = await charity.categories;
      const updateUserCharity = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { charities: charityId } },
        { new: true }
      );
      const updateUserCategories = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { categories: [...categoryIds] } },
        { new: true }
      );

      return updateUserCategories;
    },

    // DELETE from portfolio (unsaving)
    unsaveCharity: async (parent, { charityId }, context) => {
      const charity = await Charity.findOne({ _id: charityId });
      const updateUserCharity = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { charities: charityId } },
        { new: true }
      );

      return updateUserCharity;
      //   return Portfolio.findOneAndUpdate(
      //     { _id: portfolioId },
      //     { $pull: { charities: { _id: charityId } } },
      //     { new: true }
      //   );
    },
  },
};

module.exports = resolvers;
