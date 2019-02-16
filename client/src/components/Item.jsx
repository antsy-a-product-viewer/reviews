import React from 'react';
import itemStyles from './css/itemStyles.css';

const Item = (props) => {
  const clickItem = (event) => {
    console.log(event.target.id);
    props.visitItem(event.target.id);
  };

  if (props.showPrice === 'false') {
    return (
      <div style={itemStyles.wrapper} onClick={clickItem}>
        <img id={props.review.item_id} style={itemStyles.itemImg} src={props.review.item_img}></img>
        <div id={props.review.item_id} style={itemStyles.reviewItemInfo}>{props.review.item_name}</div>
      </div>
    );
  } else {
    return (
      <div style={itemStyles.wrapper}>
        <img id={props.review.item_id} style={itemStyles.itemImg} src={props.review.item_img}></img>
        <div id={props.review.item_id} style={itemStyles.reviewItemInfo}>
          <div>{props.review.item_name}</div>
          <div>$36.00</div>
        </div>
      </div>
    );
  }
};

export default Item;
