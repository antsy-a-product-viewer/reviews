import React from 'react';
import ReviewPhotosCarousel from './ReviewPhotosCarousel.jsx';
import styles from './cssModules/ReviewPhotosContainer.module.css';

const reviewPhotosStyle = {
  width: 600,
  float: "left"
}

const reviewHeaderStyle = {
  display: "flex",
  justifyContent: "space-between"
}

const arrowContainerStyle = {
  float: "right",
}

const arrowStyle = {
  marginRight: 20,
  marginLeft: 20
}

const ReviewPhotosContainer = (props) => {
  return (
    <div className="review-photos-container" style={reviewPhotosStyle}>
      <div className="review-photos-header" style={reviewHeaderStyle}>
        <h3>Photos from reviews</h3>
        <div className="photo-arrow" style={{alignSelf: "center"}}>
          <button style={arrowStyle}>
            <img src="https://www.shareicon.net/data/10x10/2015/10/18/658096_bracket_512x512.png"></img>
          </button>
          <button style={arrowStyle}>
            <img src="https://www.shareicon.net/data/10x10/2015/10/18/658171_play_512x512.png"></img>
          </button>
        </div>
      </div>
      <ReviewPhotosCarousel />
    </div>
  )
}

export default ReviewPhotosContainer;