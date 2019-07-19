module.exports = {
  validateRecipe
};

function validateRecipe(req, res, next) {
  console.log("HERE");
  const recipe = req.body;
  if (!recipe.recipe_name) {
    res.status(400).json({ error: "Bad request." });
  } else {
    next();
  }
}
