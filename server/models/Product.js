const { Schema, model } = require('mongoose');

const productScheme = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: false,
  },
});

module.exports = model('Product', productScheme);
