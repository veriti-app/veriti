const db = require("../config/connection");
const { Category, Charity, Donation, User } = require("../models");
const userSeeds = require("./userSeeds.json");
const donationSeeds = require("./donationSeeds.json");
const charitySeeds = require("./charitySeeds.json");
const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("-----USERS SEEDED-----");

    await Category.deleteMany({});
    await Category.create(categorySeeds);

    console.log("-----CATEGORIES SEEDED-----");

    await Charity.deleteMany({});
    await Charity.create(charitySeeds);

    console.log("-----CHARITIES SEEDED-----");

    await Donation.deleteMany({});
    await Donation.create(donationSeeds);

    console.log("-----DONATIONS SEEDED-----");
    process.exit(0);
  } catch (err) {
    console.error("Oops! Something went wrong");
    process.exit(1);
  }
});
