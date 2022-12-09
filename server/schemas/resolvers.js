const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolver = {};

const resolvers = {
  Query: {
    car: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await Car.find()
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  }
};
