const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;


app.get('/items/:itemId', (req, res) => {
  res.status(200).send('Hello');
});

app.listen(port, () => console.log('listening on port: ', port));