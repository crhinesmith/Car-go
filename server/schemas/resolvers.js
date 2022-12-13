const { AuthenticationError } = require("apollo-server-express");
const { User, Car } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id  }) => {
      return User.findOne({ _id }).populate('watching');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    cars: async () => {
      return await Car.find();
    },
    car: async (parent, { _id }) => {
      return await Car.findOne({ _id });
    },
    carMake: async (parent, { make }) => {
      return await Car.find({ make });
    },
    carModel: async (parent, { model }) => {
      return await Car.find({ model });
    },
    carYear: async (parent, { year }) => {
      return await Car.find({ year });
    },
    carsByMileage: async (parent, { minimumMileage, maximumMileage }) => {
      return await Car.find({ 
        mileage: {
          $gt: minimumMileage,
          $lt: maximumMileage
        }
      });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ car: args.car });
      const line_items = [];

      const { singleCar } = await order.populate('car');

        const car = await stripe.products.create({
          name: "Car",
          description: `${singleCar.make} ${singleCar.model}`,
          
        });

        const price = await stripe.prices.create({
          product: car.id,
          unit_amount: singleCar.price,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, {input}) => {
      const user = await User.create({input});
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
    },
    carSold: async (parent, { carId }) => {
      return await Car.findByIdAndDelete({ carId });
    },
  },
};

module.exports = resolvers;


 