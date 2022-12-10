const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String,
    charities: [Charity]
},

type Charity {

},

type Donation {

},

type Portfolio {

},

type User {

},

type Query {
    categories
    charities
    donations
    portfolios
    users 
}
`