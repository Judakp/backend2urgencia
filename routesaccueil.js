// routes/routesaccueil.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('./ContactMessage');

// GET de test
router.get('/', (req, res) => {
  res.send("Bienvenue sur l'accueil !");
});

// POST pour recevoir les messages du formulaire
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message bien enregistré !" });
  } catch (error) {
    console.error("Erreur lors de l’enregistrement :", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

module.exports = router;
