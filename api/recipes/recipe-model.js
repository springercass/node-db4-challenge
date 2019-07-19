const recipeDb = require("../../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  add
};

function getRecipes() {
  return recipeDb("recipes");
}

function getShoppingList(id) {
  return recipeDb("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where("recipe_id", id)
    .select(
      "recipe_ingredients.ingredient_quantity",
      "ingredients.ingredient_name"
    );
}

function add(recipe) {
  return recipeDb("recipes")
    .insert(recipe)
    .then(arrayOfIds => db("recipes").where({ id: arrayOfIds[0] }));
}

/* 
getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
*/
