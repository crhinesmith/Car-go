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


module.exports = resolvers;
