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
    // asuume this returns [{}]

    const categories = await Category.create(categorySeeds);

    console.log("-----CATEGORIES SEEDED-----");

    await Charity.deleteMany({});
    // linking categoryid with charities data
    await Charity.create([
      {
        ...charitySeeds[0],
        categories: [categories[0]._id],
      },
      {
        ...charitySeeds[1],
        categories: [categories[0]._id, categories[11]._id],
      },
      {
        ...charitySeeds[2],
        categories: [categories[1]._id],
      },
      {
        ...charitySeeds[3],
        categories: [categories[1]._id],
      },
      {
        ...charitySeeds[4],
        categories: [categories[1]._id],
      },
      {
        ...charitySeeds[5],
        categories: [categories[1]._id],
      },
      {
        ...charitySeeds[6],
        categories: [categories[4]._id],
      },
      {
        ...charitySeeds[7],
        categories: [categories[4]._id],
      },
      {
        ...charitySeeds[8],
        categories: [categories[5]._id],
      },
      {
        ...charitySeeds[9],
        categories: [categories[6]._id],
      },
      {
        ...charitySeeds[10],
        categories: [categories[6]._id],
      },
      {
        ...charitySeeds[11],
        categories: [categories[10]._id],
      },
      {
        ...charitySeeds[12],
        categories: [categories[0]._id],
      },
      {
        ...charitySeeds[13],
        categories: [categories[0]._id],
      },
      {
        ...charitySeeds[14],
        categories: [categories[2]._id],
      },
      {
        ...charitySeeds[15],
        categories: [categories[2]._id],
      },
      {
        ...charitySeeds[16],
        categories: [categories[2]._id],
      },
      {
        ...charitySeeds[17],
        categories: [categories[3]._id, categories[9]._id],
      },
      {
        ...charitySeeds[18],
        categories: [categories[3]._id],
      },
      {
        ...charitySeeds[19],
        categories: [categories[3]._id],
      },
      {
        ...charitySeeds[20],
        categories: [categories[4]._id],
      },
      {
        ...charitySeeds[21],
        categories: [categories[4]._id],
      },
      {
        ...charitySeeds[22],
        categories: [categories[5]._id],
      },
      {
        ...charitySeeds[23],
        categories: [categories[6]._id],
      },
      {
        ...charitySeeds[24],
        categories: [categories[7]._id],
      },
      {
        ...charitySeeds[25],
        categories: [categories[7]._id],
      },
      {
        ...charitySeeds[26],
        categories: [categories[7]._id],
      },
      {
        ...charitySeeds[27],
        categories: [categories[7]._id],
      },
      {
        ...charitySeeds[28],
        categories: [categories[8]._id],
      },
      {
        ...charitySeeds[29],
        categories: [categories[9]._id],
      },
      {
        ...charitySeeds[30],
        categories: [categories[9]._id],
      },
      {
        ...charitySeeds[31],
        categories: [categories[9]._id],
      },
      {
        ...charitySeeds[32],
        categories: [categories[10]._id],
      },
      {
        ...charitySeeds[33],
        categories: [categories[10]._id],
      },
      {
        ...charitySeeds[34],
        categories: [categories[11]._id, categories[9]._id],
      },
      {
        ...charitySeeds[35],
        categories: [categories[11]._id],
      },
      {
        ...charitySeeds[36],
        categories: [categories[3]._id],
      },
      {
        ...charitySeeds[37],
        categories: [categories[5]._id],
      },
      {
        ...charitySeeds[38],
        categories: [categories[5]._id],
      },
      {
        ...charitySeeds[39],
        categories: [categories[8]._id],
      },
      {
        ...charitySeeds[40],
        categories: [categories[9]._id],
      },
      {
        ...charitySeeds[41],
        categories: [categories[11]._id],
      },
      {
        ...charitySeeds[42],
        categories: [categories[11]._id, categories[6]._id],
      },
      {
        ...charitySeeds[43],
        categories: [categories[2]._id],
      },
      {
        ...charitySeeds[44],
        categories: [categories[6]._id],
      },
      {
        ...charitySeeds[45],
        categories: [categories[8]._id],
      },
      {
        ...charitySeeds[46],
        categories: [categories[8]._id],
      },
      {
        ...charitySeeds[47],
        categories: [categories[10]._id],
      },
      {
        ...charitySeeds[48],
        categories: [categories[11]._id],
      },
    ]);

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
