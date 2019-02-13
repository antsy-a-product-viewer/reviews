import React from 'react';
import moment from 'moment';
import styles from './css/reviewStyles.css.js';

const Review = (props) => {
  return (
    <div>
      <div style={styles.info}>
        <div style={styles.username}>{props.review.user_name}</div>
        <div style={styles.date}>{moment(props.review.created_at).format('MMM DD, YYYY')}</div>
      </div>
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
          <div>{props.review.review}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;