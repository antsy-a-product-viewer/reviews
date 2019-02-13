import React from 'react';
import styles from './css/reviewPhotosCarousel.css.js';

const ReviewPhotosCarousel = (props) => {
  return (
    <div>
      <img onClick={props.openModal} style={styles.reviewImage} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
      <img onClick={props.openModal} style={styles.reviewImage} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
      <img onClick={props.openModal} style={styles.reviewImage} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
      <img onClick={props.openModal} style={styles.reviewImage} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
      <img onClick={props.openModal} style={styles.reviewImage} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
    </div>
  );
};

export default ReviewPhotosCarousel;