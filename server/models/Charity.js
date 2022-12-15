const { Schema, model } = require("mongoose");

const charitySchema = new Schema({
  name: {
    type: String,
    required: true, 
  },
  location: {
    type: String,
  },
  mission: {
    type: String,
  },
  link: {
    type: String,
  },
  imgLink: {
    type: String,
  },
  ein: {
    type: String, 
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const Charity = model("Charity", charitySchema);

module.exports = Charity;
