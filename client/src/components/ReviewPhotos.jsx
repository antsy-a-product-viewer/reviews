import React from 'react';

const reviewPhotosStyle = {
  width: 500
}

const reviewHeaderStyle ={
  float: "left"
}

const photoArrowStyle = {
  float: "right"
}

const ReviewPhotos = (props) => {
  return (
    <div className="review-photos-container" style={reviewPhotosStyle}>
      <div className="review-photos-header" sytle={reviewHeaderStyle}>
        <h3>Photos from reviews</h3>
      </div>
      <div className="photo-arrow" style={photoArrowStyle}>
        <img src="https://www.shareicon.net/data/25x25/2015/10/18/658096_bracket_512x512.png"></img>
        <img src="https://www.shareicon.net/data/25x25/2015/10/18/658171_play_512x512.png"></img>
      </div>
    </div>
  )
}

export default ReviewPhotos;