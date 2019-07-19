exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { ingredient_quantity: 1.2, recipe_id: 1, ingredient_id: 2 },
        { ingredient_quantity: 2.4, recipe_id: 2, ingredient_id: 2 },
        { ingredient_quantity: 3.6, recipe_id: 1, ingredient_id: 3 }
      ]);
    });
};
