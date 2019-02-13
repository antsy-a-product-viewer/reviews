import React from 'react';
import styles from './css/itemStyles.css';

const Item = (props) => {
  if (props.showPrice === 'false') {
    return (
      <div style={styles.wrapper}>
        <img style={styles.reviewItem} src="https://i.etsystatic.com/10759216/d/il/b478b8/1418735868/il_75x75.1418735868_dnlw.jpg?version=0"></img>
        <div style={styles.reviewItemInfo}>Anatomical Heart Brooch, Real Anatomy Pin Stained Glass, Tiff...</div>
      </div>
    );
  } else {
    return (
      <div style={styles.wrapper}>
        <img style={styles.reviewItem} src="https://i.etsystatic.com/10759216/d/il/b478b8/1418735868/il_75x75.1418735868_dnlw.jpg?version=0"></img>
        <div style={styles.reviewItemInfo}>
          <div>Anatomical Heart Brooch, Real Anatomy Pin Stained Glass, Tiff...</div>
          <div>$36.00</div>
        </div>
      </div>
    );
  }
};

export default Item;
