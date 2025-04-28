// models/Pompiers.js
const mongoose = require("mongoose");

const PompierSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
  },
  ville: {
    type: String,
  },
  region: {
    type: String,
  },
});

module.exports = mongoose.model("Pompier", PompierSchema);
