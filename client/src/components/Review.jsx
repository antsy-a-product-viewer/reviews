import React from 'react';
import styles from './css/reviewStyles.css.js';

const Review = (props) => {
  return (
    <div>
      <div>
        <div style={styles.starDiv}>
          <img style={styles.star} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-star-512.png"></img>
          <img style={styles.star} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-star-512.png"></img>
          <img style={styles.star} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-star-512.png"></img>
          <img style={styles.star} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-star-512.png"></img>
          <img style={styles.star} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-star-512.png"></img>
        </div>
      </div>
      <div>
        <div>Beautiful piece of art! Great details, very high quality brooch. Wonderful seller!</div>
      </div>
    </div>
  );
};

export default Review;