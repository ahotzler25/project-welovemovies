
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
      table.increments("review_id").primary();
      table.text("content");
      table.integer("score");
    //   Add two foreign keys (critic_id and movie_id);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews");
};
