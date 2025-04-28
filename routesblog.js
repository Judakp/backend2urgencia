// routes/routesblog.js
const express = require("express");
const router = express.Router();
const Article = require("./blog");

// Récupérer les articles avec pagination
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Page actuelle
  const limit = 5; // Nombre d'articles par page
  const skip = (page - 1) * limit; // Articles à ignorer

  try {
    const articles = await Article.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    const totalArticles = await Article.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.json({ articles, totalPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajouter un nouvel article
router.post("/", async (req, res) => {
  const article = new Article(req.body);
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;


