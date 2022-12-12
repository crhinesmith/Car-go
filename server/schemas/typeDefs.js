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
    addCarToWatchlist(products: [ID]!): Car
    carSold(_id: ID!): Car
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
