const { Schema, model } = require('mongoose');

const userScheme = new Schema({
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

module.exports = model('User', userScheme);
