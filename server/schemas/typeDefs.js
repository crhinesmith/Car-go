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
  type Order {
    _id: ID
    purchaseDate: String
    car: Car
  }
  
  type Checkout {
    session: ID
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
    order(_id: ID!): Order
    checkout(car: [ID]!): Checkout
    cars: [Car]
    car(_id: ID!): Car
    carMake(make: String!): [Car]
    carModel(model: String!): [Car]
    carYear(year: String!): [Car]
    carsByMileage(minimumMileage: Int!, maximumMileage: Int!): [Car]!
  }

  type Mutation {
    newUser(input: AddUserInput!): Auth
    addCarToWatchlist(carId: ID!): User
    carSold(_id: ID!): Car  
    removeCarFromWatchlist(carId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
