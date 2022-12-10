const { Schema, model } = require("mongoose");

const portfolioSchema = new Schema(
    {
        user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
        charities: [
            {
                type: Schema.Types.ObjectId,
                ref: "Charity"
            }
        ],
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: "Category"
            }
        ],
    }
)

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;