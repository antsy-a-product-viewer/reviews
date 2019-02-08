
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments('id')
    table.string('name')
    table.float('price')
    table.number('store_id')
    table.string('img_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
