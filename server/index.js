const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;


app.get('/items/:itemId/reviews', (req, res) => {
  db.getAllReviewsForItem(1, (err, data) => {
    if (err) {
      console.log('error getting item reviews: ', err);
      res.status(400).send(err);
    } else {
      var parsedData = JSON.parse(data)
      console.log('success getting reviews for item');
      res.status(200).send(parsedData);
    }
  });
});

app.listen(port, () => console.log('listening on port: ', port));