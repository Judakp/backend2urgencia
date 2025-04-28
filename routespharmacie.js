// routes/pharmacieRoutes.js
const express = require("express");
const router = express.Router();
const Pharmacie = require("./pharmacie");

// Récupérer toutes les pharmacies
router.get("/", async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajouter une nouvelle pharmacie
router.post("/", async (req, res) => {
  const pharmacy = new Pharmacy(req.body);
  try {
    const newPharmacy = await pharmacy.save();
    res.status(201).json(newPharmacy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
