exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "cup of corn" },
        { ingredient_name: "chicken breast" },
        { ingredient_name: "head of lettuce" },
        { ingredient_name: "cup of flour" },
        { ingredient_name: "ear corn" },
        { ingredient_name: "can of corn" },
        { ingredient_name: "red sauce" }
      ]);
    });
};
