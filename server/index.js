const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/items/:itemId/reviews', (req, res) => {
  db.getAllReviewsForItem(1, (err, data) => {
    if (err) {
      console.log('error getting item reviews: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting reviews for item');
      res.status(200).send(data);
    }
  });
});

app.get('/reviews/:reviewId', (req, res) => {
  db.getInfoForReview(1, (err, data) => {
    if (err) {
      console.log('error getting review: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting review');
      res.status(200).send(data);
    }
  });
});

app.get('/stores/:storeId/reviews', (req, res) => {
  db.getAllReviewsForStore(1, (err, data) => {
    if (err) {
      console.log('error getting store reviews: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting reviews for store');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log('listening on port: ', port));