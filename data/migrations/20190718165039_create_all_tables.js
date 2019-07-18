exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();

      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("step", 256).notNullable();
      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {};
