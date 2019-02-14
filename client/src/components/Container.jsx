import React from 'react';
import axios from 'axios';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx';
import containerStyles from './css/containerStyles.css.js';
import ReviewContainer from './ReviewContainer.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.getReviewInfo = this.getReviewInfo.bind(this);
    this.getReviewImages = this.getReviewImages.bind(this);
    this.getAverageStars = this.getAverageStars.bind(this);
    this.state = {
      showModal: false,
      reviews: [],
      reviewImages: []
    };
  }

  componentDidMount() {
    this.getReviewInfo(9);
    this.getReviewImages(9);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  getReviewInfo(storeId) {
    axios.get(`/stores/${storeId}/reviews`)
      .then((res) => {
        this.setState({
          reviews: res.data
        });
      });
  }

  getReviewImages(storeId) {
    axios.get(`/stores/${storeId}/review_images`)
      .then((res) => {
        this.setState({
          reviewImages: res.data
        });
      });
  }

  getAverageStars(storeId) {
    console.log(this.state.reviews);
    var average;
    var total = 0;
    for (var i = 0; i < this.state.reviews.length; i++) {
      total += reviews[i].stars;
    }
    average = Math.floor(total / this.state.reviews.length);
    console.log(`average stars for store: ${average}`);
  }
  
  render() {
    return (
      <div style={containerStyles.container}>
        <h2 style={containerStyles.header}>Reviews</h2>
        <ReviewContainer reviews={this.state.reviews} showPrice="false"/>
        <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.toggleModal}/>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
      </div>
    );
  }
}

export default Container;