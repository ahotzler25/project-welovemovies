
exports.up = function(knex) {
  return knex.schema.createTable("movies_theatres", (table) => {
    //   Join table that connects movies with theatres
    table.boolean("is_showing");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies_theatres");
};
