
exports.up = function(knex) {
  return knex.schema.createTable("movies", (table) => {
      table.increments("id").primary();
      table.string("title", 20000);
      table.integer("runtime_in_minutes");
      table.string("rating");
      table.string("description", 20000);
      table.string("image_url");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies");
};
