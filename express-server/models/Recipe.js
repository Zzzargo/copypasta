const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String},
  rating: { type: Number, default: 0 },
  times_rated: { type: Number, default: 0 },
  author: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
