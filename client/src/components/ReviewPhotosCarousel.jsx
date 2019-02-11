import React from 'react';

const reviewImageStyle = {
  clear: "both",
  maxWidth: 100,
  maxHeight: 100,
  margin: 10
}

const ReviewPhotosCarousel = (props) => {
  return (
    <div className="review-photos">
      <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0" style={reviewImageStyle}></img>
      <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0" style={reviewImageStyle}></img>
      <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0" style={reviewImageStyle}></img>
      <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0" style={reviewImageStyle}></img>
      <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_300x300.1735567682_9rntz5h8.jpg?version=0" style={reviewImageStyle}></img>
    </div>
  )
}

export default ReviewPhotosCarousel;