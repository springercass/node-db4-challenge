const express = require("express");

const router = express.Router();

const recipeDb = require("./recipe-model");
const { validateRecipe } = require("../middleware");

router.get("/", async (req, res) => {
  try {
    const recipes = await recipeDb.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

router.get("/:id/shoppinglist", async (req, res) => {
  try {
    const recipes = await recipeDb.getShoppingList(req.params.id);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

router.post("/", validateRecipe, async (req, res) => {
  try {
    const recipe = await recipeDb.add(req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
