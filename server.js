

// server.js

const express       = require("express");
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const cors          = require("cors");
require("dotenv").config();

const app = express();



// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ─── IMPORTATION DES ROUTES ───────────────────────────────────────────────────
const accueilRoutes    = require("./routesaccueil");
const aproposRoutes    = require("./routesapropos");
const blogRoutes       = require("./routesblog");
const hopitalRoutes    = require("./routeshopital");
const pharmacieRoutes  = require("./routespharmacie");
const pompierRoutes    = require("./routespompiers");



// ─── UTILISATION DES ROUTES ──────────────────────────────────────────────────
app.use("/api/accueil",    accueilRoutes);
app.use("/api/apropos",    aproposRoutes);
app.use("/api/blog",       blogRoutes);
app.use("/api/hopitaux",   hopitalRoutes);
app.use("/api/pharmacies", pharmacieRoutes);
app.use("/api/pompiers",   pompierRoutes);



// Connexion à MongoDB
console.log("→ MONGO_URI =", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion MongoDB :", err));

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur actif sur le port ${PORT}`));
