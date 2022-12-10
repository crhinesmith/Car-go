const db = require('./connectiononnection');
const { Car, User } = require('../models');
const carSeeds = require('./carSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Car.deleteMany({});
    await Car.create(carSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('User and Car data seeded!');
    process.exit();
  } catch (err) {
    throw err;
  }
});

