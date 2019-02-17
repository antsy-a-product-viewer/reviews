import React from 'react';
import styles from './css/reviewPhotosCarouselStyles.css';

const ReviewPhotosCarousel = (props) => {
  const minIndex = (props.page - 1) * 5;
  const maxIndex = props.page * 5;
  return (
    <div>
      {props.reviewImages.slice(minIndex, maxIndex).map((image) => {
        return (
          <img key={image.review_id} onClick={props.openModal} style={styles.reviewImage} src={image.review_img}></img>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;