const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  art_name: {
    type: String,
    required: true
  },
  artist_name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String
  }
});

const items = mongoose.model("items", itemSchema);

module.exports = items;
