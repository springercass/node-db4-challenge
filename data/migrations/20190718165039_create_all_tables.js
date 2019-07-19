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
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl.float("ingredient_quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("step_content", 256).notNullable();
      tbl.integer("step_number").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions");
};
