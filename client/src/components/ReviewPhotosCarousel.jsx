import React from 'react';
import _ from 'underscore';
import styles from './css/reviewPhotosCarousel.css.js';

const ReviewPhotosCarousel = (props) => {
  return (
    <div>
      {props.reviewImages.map((image) => {
        return (
          <img key={image.review_id} onClick={props.openModal} style={styles.reviewImage} src={image.img_url}></img>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;