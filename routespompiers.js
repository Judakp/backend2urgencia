// routes/pompiers.js
const express = require("express");
const router = express.Router();
const Pompier = require("./pompiers");

// Récupérer toutes les stations de sapeurs pompiers
router.get("/", async (req, res) => {
  try {
    const pompiers = await pompier.find();
    res.json(pompier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajouter une nouvelle station des sapeurs pompiers
router.post("/", async (req, res) => {
  const pompier = new Pompier(req.body);
  try {
    const newPompier = await pompier.save();
    res.status(201).json(pompier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
