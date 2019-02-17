import React from 'react';
import styles from './css/reviewPhotosCarouselStyles.css';

const ReviewPhotosCarousel = (props) => {
  const getIndex = (event) => {
    console.log(event.target.id);
    props.openModal(event.target.id);
  };

  return (
    <div>
      {props.reviewImages.slice(0, 5).map((image, index) => {
        return (
          <img className="photoCarouselImg" id={index} key={image.review_id} onClick={getIndex} style={styles.reviewImage} src={image.review_img}></img>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;