import React from 'react';
import styles from './css/reviewPhotosCarouselStyles.css';

const ReviewPhotosCarousel = (props) => {
  return (
    <div>
      {props.reviewImages.slice(0, 5).map((image) => {
        return (
          <img className="photoCarouselImg" key={image.review_id} onClick={props.openModal} style={styles.reviewImage} src={image.review_img}></img>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;