// routes/stationsservices.js
const express = require("express");
const router = express.Router();
const Stationservice = require("./stationsservices");

// Récupérer toutes les stations services
router.get("/", async (req, res) => {
  try {
    const stationservices = await Stationservice.find();
    res.json(stationsservices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajouter une nouvelle station service
router.post("/", async (req, res) => {
  const stationservice = new Stationservice(req.body);
  try {
    const newPharmacy = await stationservice.save();
    res.status(201).json(newStationservice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
