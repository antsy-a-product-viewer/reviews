import React from 'react';
import styles from './css/reviewStyles.css.js';

const Review = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <img style ={styles.profileImg} src="https://i.etsystatic.com/iusa/71374a/55084077/iusa_75x75.55084077_ng7a.jpg?version=0"></img>
      </div>
      <div style={styles.wrapper}>
        <div>
          <div style={styles.username}>sara</div>
          <div style={styles.date}>Jan 3, 2019</div>
        </div>
        <div>
          <div style={styles.starDiv}>
            <img style={styles.star} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={styles.star} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={styles.star} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={styles.star} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={styles.star} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
          </div>
        </div>
        <div>
          <div>Beautiful piece of art! Great details, very high quality brooch. Wonderful seller!</div>
        </div>
        <div>
          <img src="https://i.etsystatic.com/10759216/d/il/b478b8/1418735868/il_75x75.1418735868_dnlw.jpg?version=0" style={styles.reviewItem}></img>
          <div style={styles.reviewItemText}>Anatomical Heart Brooch, Real Anatomy Pin Stained Glass, Tiff...</div>
        </div>
      </div>
    </div>
  );
};

export default Review;