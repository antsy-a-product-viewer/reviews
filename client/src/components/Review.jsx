import React from 'react';
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
          <div>
            {_.times(props.review.stars, (n) =>{
              return (
                <img className="reviewStar" key={n} style={styles.star} src="https://s3-us-west-1.amazonaws.com/anstyicons/icon-star-512.png"></img>
              );
            })}
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