import React from 'react';
import styles from './css/reviewPhotosCarouselStyles.css';

const ReviewPhotosCarousel = (props) => {
  const minIndex = (props.page - 1) * 5;
  
  const maxIndex = props.page * 5;

  const getIndex = (event) => {
    console.log(event.target.id);
    props.openModal(event.target.id);
  };
  return (
    <div>
      {props.reviewImages.slice(minIndex, maxIndex).map((image, index) => {
        return (
          <img id={index} key={image.review_id} onClick={getIndex} style={styles.reviewImage} src={image.review_img}></img>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;