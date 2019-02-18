import React from 'react';
import ReviewImg from './ReviewImg.jsx';
import styles from './css/reviewPhotosCarouselStyles.css';

const ReviewPhotosCarousel = (props) => {
  const minIndex = (props.page - 1) * 5;
  
  const maxIndex = props.page * 5;

  const getIndex = (event) => {
    props.openModal(event.target.id);
  };
  return (
    <div style={{height: 120}}>
      {props.reviewImages.slice(minIndex, maxIndex).map((image, index) => {
        return (
          <img id={index} key={image.review_id} onClick={getIndex} style={styles.reviewImage} src={image.review_img}></img>
          // <ReviewImg id={index} key={image.review_id} onClick={getIndex} style={styles.reviewImage} image={image.review_img}/>
        );
      })}
    </div>
  );
};

export default ReviewPhotosCarousel;