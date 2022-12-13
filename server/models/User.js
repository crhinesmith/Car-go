const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const carSchema = require('./Car');
const Order = require('./Order');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },

  admin: {
    type: Boolean,
    required: true,
    trim: true
  },
  watching: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car',
    }
  ],
  orders: [Order.schema]
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.virtual('watchlistCount').get(function () {
  return this.watching.length
})
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
