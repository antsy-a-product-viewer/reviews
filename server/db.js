const mysql = require('mysql');
const knexConfig = require('../knexfile.js').development.connection;

const connection = mysql.createConnection(knexConfig);

connection.connect();

const getAllReviewsForItem = (itemId, callback) => {
  connection.query('SELECT * FROM reviews where item_id=?', [itemId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getInfoForReview = (reviewId, callback) => {
  var query = 'SELECT users.img_url AS user_img, users.name AS user_name, reviews.created_at, reviews.stars, reviews.review, items.img_url AS item_img, items.name AS item_name FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN items ON reviews.item_id = items.id WHERE reviews.id = ?';
  connection.query(query, [reviewId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
};

const getAllReviewsForStore = (storeId, callback) => {
  var query = 'SELECT users.img_url AS user_img, users.name AS user_name, reviews.created_at, reviews.stars, reviews.review, items.img_url AS item_img, items.name AS item_name FROM reviews INNER JOIN users ON reviews.user_id = users.id INNER JOIN items ON reviews.item_id = items.id WHERE items.store_id = ? ORDER BY reviews.created_at';
  connection.query(query, [storeId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getAllReviewsForItem,
  getInfoForReview,
  getAllReviewsForStore
};
