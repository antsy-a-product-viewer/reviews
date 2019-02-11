import React from 'react';

const reviewPhotosStyle = {
  width: 500,
  display: "flex"
}

const reviewHeaderStyle ={
  float: "left"
}

const photoArrowStyle = {
  float: "right"
}

const reviewImageStyle = {
  width: "50px",
  height: "50px"
}

const ReviewPhotos = (props) => {
  return (
    <div className="review-photos-container" style={reviewPhotosStyle}>
      <div className="review-photos-header">
        <h3>Photos from reviews</h3>
      </div>
      <div className="photo-arrow" style={photoArrowStyle}>
        <img src="https://www.shareicon.net/data/20x20/2015/10/18/658096_bracket_512x512.png"></img>
        <img src="https://www.shareicon.net/data/20x20/2015/10/18/658171_play_512x512.png"></img>
      </div>
      <div className="review-photos">
        <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0"></img>
      </div>
    </div>
  )
}

export default ReviewPhotos;