<<<<<<< HEAD
const db = require('./connectiononnection');
const { Car, User } = require('../models');
const carSeeds = require('./carSeeds.json');
const userSeeds = require('./userSeeds.json');
=======
const db = require("./connection");
const { Car, User } = require("../models");
const carSeeds = require("./carSeeds.json");
const userSeeds = require("./userSeeds.json");
>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7

db.once("open", async () => {
  try {
    await Car.deleteMany({});
    await Car.create(carSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

<<<<<<< HEAD
    console.log('User and Car data seeded!');
=======
    console.log("User and Car data seeded!");
>>>>>>> e6e6ae33a355f127fa1dd8b604f215b70a5b8fd7
    process.exit();
  } catch (err) {
    throw err;
  }
});
