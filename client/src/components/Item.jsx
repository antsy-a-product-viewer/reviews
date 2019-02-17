import React from 'react';
import itemStyles from './css/itemStyles.css';

const Item = (props) => {
  if (props.showPrice === 'false') {
    return (
      <div style={itemStyles.wrapper}>
        <img style={itemStyles.itemImg} src={props.review.item_img}></img>
        <div style={itemStyles.reviewItemInfo}>{props.review.item_name}</div>
      </div>
    );
  } else {
    return (
      <div style={itemStyles.wrapper}>
        <img style={itemStyles.itemImg} src={props.review.item_img}></img>
        <div style={itemStyles.reviewItemInfo}>
          <div>{props.review.item_name}</div>
          <div>${props.review.price}.00</div>
        </div>
      </div>
    );
  }
};

export default Item;
