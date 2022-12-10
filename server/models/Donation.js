const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const donationSchema = new Schema({
  donationAmount: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  charity:
    {
      type: Schema.Types.ObjectId,
      ref: "Charity",
    },
});

const Donation = model("Donation", donationSchema);

module.exports = Donation;
