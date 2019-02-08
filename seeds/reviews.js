var faker = require('faker');
var sprintf = require('sprintf-js').sprintf;

let createRecord = (knex, id) => {
  let imageName = sprintf('%05s.jpg');
  var imageUrl;

  if (id < 25) {
    imageUrl = 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/' + imageName;
  } else {
    imageUrl = null;
  }

  return knex('reviews').insert({
    id,
    stars: faker.random.number({
      min: 0,
      max: 5
    }),
    'createdAt': faker.date.past(5),
    'reviewTxt': faker.hacker.phrase(),
    'reviewImgUrl': imageUrl,
    'userId': faker.random.number({
      min: 1,
      max: 30
    }),
    'itemId': faker.random.number({
      min: 1,
      max: 100
    })
  });
}

exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(() => {
      let records =[];
      for (var i = 1; i <= 1000; i++) {
        records.push(createRecord(knex, i));
      }
      return Promise.all(records);
    });
};
