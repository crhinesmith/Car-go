const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID

    firstName: String
    lastName: String
    email: String
    password: String
    admin: Boolean
    watching: [Car]
  }

  type Car {
    _id: ID
    make: String
    model: String
    year: Int
    mileage: Int
    image: String
  }

  type Auth {
    token: ID
    user: User
  }
  input AddUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    admin: Boolean!
  }
  type Query {
    users: [User]
    user(_id: ID!): User
    cars: [Car]
    car(_id: ID!): Car
    carMake(make: String!): [Car]
    carModel(model: String!): [Car]
    carYear(year: String!): [Car]
    carsByMileage(minimumMileage: Int!, maximumMileage: Int!): [Car]!
  }

  type Mutation {
    addUser(input: AddUserInput!): Auth
<<<<<<< HEAD
    addCarToWatchlist(carId: ID!): User
    carSold(_id: ID!): Car  
=======
    addCarToWatchlist(products: [ID]!): User
    removeCarFromWatchlist(carId: ID!): User
    carSold(_id: ID!): Car
>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
