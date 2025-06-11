const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  categories: {
    ru: String,
    ua: String,
    en: String,
    de: String,
  },
  weight: Number,
  title: {
    ru: String,
    ua: String,
    en: String,
    de: String,
  },
  calories: Number,
  groupBloodNotAllowed: {
    0: {},
    1: Boolean,
    2: Boolean,
    3: Boolean,
    4: Boolean,
  },
});

const productsService = model('products', productsSchema);
module.exports = productsService;
