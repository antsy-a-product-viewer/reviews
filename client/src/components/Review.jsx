import React from 'react';
import Star from './Star.jsx';
import ReviewImg from './ReviewImg.jsx';
import moment from 'moment';
import _ from 'underscore';
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
          <Star stars={props.stars}/>
          <div>{props.review.review}</div>
          <ReviewImg style={{height: 300, width: 300, marginTop: 10}} image={props.review.review_img}/>
        </div>
      </div>
    </div>
  );
};

export default Review;