import React from 'react';
import ReviewPhotosCarousel from './ReviewPhotosCarousel.jsx';
import styles from './css/reviewPhotosContainerStyles.css.js';

const ReviewPhotosContainer = (props) => {
  return (
    <div style={styles.reviewPhotos}>
      <div style={styles.reviewHeader}>
        <h3>Photos from reviews</h3>
        <div style={styles.arrowContainer}>
          <button style={styles.arrow}>
            <img src="https://www.shareicon.net/data/10x10/2015/10/18/658096_bracket_512x512.png"></img>
          </button>
          <button style={styles.arrow}>
            <img src="https://www.shareicon.net/data/10x10/2015/10/18/658171_play_512x512.png"></img>
          </button>
        </div>
      </div>
      <ReviewPhotosCarousel openModal={props.openModal}/>
    </div>
  );
};

export default ReviewPhotosContainer;