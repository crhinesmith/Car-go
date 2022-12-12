const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order, Car } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolver = {};

const resolvers = {
  Query: {
    car: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await Car.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addCarToWatchlist: async (parent, { carId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, {
          $push: { watching: carId },
        });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};
