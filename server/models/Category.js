const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  Name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
  },
});

module.exports = model('Category', categorySchema);