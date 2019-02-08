
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table => {
    table.increments('id').primary()
    table.integer('stars')
    table.timestamp('created_at')
    table.string('review_txt')
    table.string('review_img')
    table.foreign('user_id').references('users.id')
    table.foreign('item_id').references('items.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
