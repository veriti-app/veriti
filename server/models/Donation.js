const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const donationSchema = new Schema({
  donationAmount: {
    type: Number,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  charities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Charity",
    },
  ],
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
