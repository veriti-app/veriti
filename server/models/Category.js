const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        charities: [
            {
                type: Schema.Types.ObjectId,
                ref: "Charity"
            }
        ]
    }
)

const Category = model("Category", categorySchema);

module.exports = Category;