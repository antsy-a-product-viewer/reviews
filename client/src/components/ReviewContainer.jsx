import React from 'react';
import Review from './Review.jsx';
import Item from './Item.jsx';
import reviewContainerStyles from './css/reviewContainerStyles.css.js';

const ReviewContainer = (props) => {
  return (
    <div>
      {props.reviews && props.reviews.map((review) => {
        return (
          <div style={reviewContainerStyles.container}>
            <img style ={reviewContainerStyles.profileImg} src={review.user_img}></img>
            <div>
              <Review key={review.review_id} review={review}/>
              <Item key={review.item_id} showPrice={props.showPrice} review={review}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewContainer;
