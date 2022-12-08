const { Schema, model } = require('mongoose');

const carSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Car = model('Car', carSchema);

module.exports = Car;
