const mysql = require('mysql');
const knexConfig = require('../knexfile.js').development.connection;

const connection = mysql.createConnection(knexConfig);

connection.connect();

const getStoreFromItem = (itemId, callback) => {
  var query = 'SELECT store_id FROM items WHERE id = ?';
  connection.query(query, [itemId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getAllReviewsForStore = (storeId, callback) => {
  var query = 'SELECT reviews.id AS review_id, users.img_url AS user_img, users.name AS user_name, reviews.created_at, reviews.stars, reviews.review, reviews.img_url AS review_img, items.id AS item_id, items.img_url AS item_img, items.name AS item_name, items.price FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN items ON reviews.item_id = items.id WHERE items.store_id = ? ORDER BY reviews.created_at';
  connection.query(query, [storeId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getStoreFromItem,
  getAllReviewsForStore
};
