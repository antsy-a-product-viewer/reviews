import React from 'react';
import Review from './Review.jsx';
import Item from './Item.jsx';
import styles from './css/reviewContainerStyles.css.js';

const ReviewContainer = (props) => {
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div style={styles.container}>
            <img style ={styles.profileImg} src={review.user_img}></img>
            <div>
              <Review review={review}/>
              <Item showPrice={props.showPrice}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

var reviews = [
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00010.jpg",
    "user_name": "Jalen Paucek",
    "created_at": "2014-02-15T21:43:09.000Z",
    "stars": 5,
    "review": "You can't connect the pixel without overriding the auxiliary RSS card!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
    "item_name": "Ergonomic Concrete Tuna"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00027.jpg",
    "user_name": "Zella Blick",
    "created_at": "2014-03-14T22:37:45.000Z",
    "stars": 4,
    "review": "Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
    "item_name": "Handmade Concrete Salad"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00024.jpg",
    "user_name": "Deangelo Schuppe",
    "created_at": "2014-03-27T15:37:49.000Z",
    "stars": 0,
    "review": "I'll generate the cross-platform COM firewall, that should driver the XSS pixel!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg",
    "item_name": "Rustic Metal Chair"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00014.jpg",
    "user_name": "Stacey Spencer",
    "created_at": "2014-05-01T06:50:00.000Z",
    "stars": 3,
    "review": "We need to reboot the primary XML circuit!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg",
    "item_name": "Generic Steel Soap"
  }
]

export default ReviewContainer;