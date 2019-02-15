const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const port = 3000;

// app.use('/items/:itemId', express.static(path.join(__dirname, '/../client/dist')));
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/items/:itemId', (req, res) => {
  var itemId = req.params.itemId;
  db.getStoreFromItem(itemId, (err, data) => {
    if (err) {
      console.log('error getting storeId: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting storeId');
      res.status(200).send(data);
    }
  });
});

app.get('/reviews/:reviewId', (req, res) => {
  var reviewId = req.params.reviewId;
  db.getInfoForReview(reviewId, (err, data) => {
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
  var storeId = req.params.storeId;
  db.getAllReviewsForStore(storeId, (err, data) => {
    if (err) {
      console.log('error getting store reviews: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting reviews for store');
      res.status(200).send(data);
    }
  });
});

app.get('/stores/:storeId/review_images', (req, res) => {
  db.getReviewImagesForStore(1, (err, data) => {
    if (err) {
      console.log('error getting store review images: ', err);
      res.status(400).send(err);
    } else {
      console.log('success getting review images for store');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log('listening on port: ', port));