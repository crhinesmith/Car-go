<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Car } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
=======
const { AuthenticationError } = require("apollo-server-express");
const { User, Car } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('watching');
    },
<<<<<<< HEAD
=======
    cars: async () => {
      return await Car.find();
    },
    car: async (parent, { carId }) => {
      return await Car.findOne({ _id: carId });
    },
    carMake: async (parent, { carMake }) => {
      return await Car.find({ make: carMake });
    },
    carModel: async (parent, { carModel }) => {
      return await Car.find({ model: carModel });
    },
    carYear: async (parent, { carYear }) => {
      return await Car.find({ year: carYear });
    },
>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
<<<<<<< HEAD
  },
    addCarToWatchlist: async (parent, {carId}, context) => {
      if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, { $push: { watching: carId } });
    }
   throw new AuthenticationError('Not logged in');
  }
}};
=======
    },
    addCarToWatchlist: async (parent, { carId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, {
          $push: { watching: carId },
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    removeCarFromWatchlist: async (parent, { carId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, {
          $pull: { watching: carId },
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;


>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7
