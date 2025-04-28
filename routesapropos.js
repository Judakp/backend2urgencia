// routesapropos.js

const express = require("express");
const router  = express.Router();

// Définis tes routes, par ex. :
router.get("/", (req, res) => {
  res.send("À propos OK");
});

// Export direct du router — impératif !
module.exports = router;        // ✅
// NE PAS faire : exports.router = router;     // ❌
// NI : module.exports = { router };           // ❌


