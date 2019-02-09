const mysql = require('mysql');
const knexConfig = require('../knexfile.js').development.connection;

const connection = mysql.createConnection(knexConfig);

connection.connect();

const getAllReviewsForItem = (itemId, callback) => {
  connection.query('SELECT * FROM reviews where item_id=?', [itemId], (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, JSON.stringify(results));
    }
  });

}

module.exports = {
  getAllReviewsForItem
}
