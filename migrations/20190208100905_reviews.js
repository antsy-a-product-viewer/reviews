
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary()
    table.integer('stars')
    table.timestamp('createdAt')
    table.string('reviewTxt')
    table.string('reviewImgUrl')
    table.integer('userId').unsigned().index().references('id').inTable('users')
    table.integer('itemId').unsigned().index().references('id').inTable('items')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
