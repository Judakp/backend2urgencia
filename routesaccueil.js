// routes/routesaccueil.js
// routes/accueil.js
const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/', (req, res) => {
  res.send("Bienvenue sur l'accueil !");
});

module.exports = router; // ← c'est ça qui permet app.use(...) de fonctionner
