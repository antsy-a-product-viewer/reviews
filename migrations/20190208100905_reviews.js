
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary()
    table.integer('stars')
    table.timestamp('createdAt')
    table.string('reviewTxt')
    table.string('reviewImgUrl')
    table.foreign('userId').references('users.id')
    table.foreign('itemId').references('items.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
