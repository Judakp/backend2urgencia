// routes/routeshopital.js
const express = require("express");
const router = express.Router();
const Hopital = require("./hopital");

// Récupérer tous les hopitaux
router.get("/", async (req, res) => {
  try {
    const hopitaux = await Hopital.find();
    res.json(hopitaux);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajouter une nouvel hopital
router.post("/", async (req, res) => {
  const hopital = new Hopital(req.body);
  try {
    const newHopital = await hopital.save();
    res.status(201).json(newHopital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
