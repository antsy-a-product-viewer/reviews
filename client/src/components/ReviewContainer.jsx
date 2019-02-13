import React from 'react';
import Review from './Review.jsx';
import Item from './Item.jsx';
import styles from './css/reviewContainerStyles.css.js';

const ReviewContainer = (props) => {
  return (
    <div style={styles.container}>
      <div>
        <img style ={styles.profileImg} src="https://i.etsystatic.com/iusa/71374a/55084077/iusa_75x75.55084077_ng7a.jpg?version=0"></img>
      </div>
      <div>
        <div style={styles.info}>
          <div style={styles.username}>sara</div>
          <div style={styles.date}>Jan 3, 2019</div>
        </div>
        <Review />
        <Item showPrice={props.showPrice}/>
      </div>
    </div>
  );
};

export default ReviewContainer;