const { Schema, model } = require('mongoose');

const charitySchema = new Schema(
    {
        name: {
            type: String,
            required: true // Do we need 'trim' property?
        },
        location: {
            type: String,
        },
        mission: {
            type: String,
        },
        link: {
            type: String
        },
        ein: {
            type: String // could be Number, but we have to exclude '-' in our data
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: "Category"
            }
        ]
    }
);

const Charity = model("Charity", charitySchema);

module.exports = Charity;