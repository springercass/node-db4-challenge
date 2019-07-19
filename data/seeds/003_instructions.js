exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_number: 1, step_content: "Do the first step.", recipe_id: 1 },
        { step_number: 2, step_content: "Do the second step.", recipe_id: 1 },
        { step_number: 3, step_content: "Do the third step.", recipe_id: 1 }
      ]);
    });
};
