// models/Pharmacy.js
const mongoose = require("mongoose");

const AproposSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  photos: { type: [String], default: [] }, // 2 photos du siège du service
  phone: { type: String },
  email: { type: String },
  googleMapLink: { type: String }, // lien généré vers Google Maps
});

module.exports = mongoose.model("Apropos", AproposSchema);
