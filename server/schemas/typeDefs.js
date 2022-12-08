const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
  }

  type Car {
    name: String
  }

  // type Query {
  //   car: [Profile]!
  //   user(profileId: ID!): User
  // }

  type Mutation {
    adduser(name: String!): User
    addCar(userId: ID!, car: String!): Car
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
