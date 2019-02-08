var express = require('express');
var app = express();
var port = 3000;

app.listen(port, () => console.log('listening on port: ', port));

app.get('/items/:itemId', (req, res) => {
  res.status(200).send('Hello');
})