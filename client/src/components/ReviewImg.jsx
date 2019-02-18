import React from 'react';

const ReviewImg = (props) => {
  if (props.image !== null) {
    return (
      <img style={{height: 300, width: 300, marginTop: 10}} src={props.image}></img>
    );
  } else {
    return null;
  }
};

export default ReviewImg;
