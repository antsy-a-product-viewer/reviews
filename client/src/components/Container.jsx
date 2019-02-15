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
    this.getStoreId = this.getStoreId.bind(this);
    this.getReviewInfo = this.getReviewInfo.bind(this);
    this.getReviewImages = this.getReviewImages.bind(this);
    this.getAverageStars = this.getAverageStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.state = {
      storeId: 10,
      showModal: false,
      reviews: [],
      reviewImages: [],
      showMore: false,
    };
  }

  componentDidMount() {
    this.getStoreId(20);
    this.getReviewInfo(this.state.storeId);
    this.getReviewImages(this.state.storeId);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  getStoreId(itemId) {
    console.log(`getStoreId called`);
    axios.get(`/items/${itemId}`)
      .then((res) => {
        console.log(res.data[0].store_id);
        this.setState({
          storeId: res.data[0].store_id
        });
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

  showMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }


  
  render() {
    if (!this.state.showMore) {
      return (
        <div style={containerStyles.container}>
          <h2 style={containerStyles.header}>Reviews</h2>
          <ReviewContainer reviews={this.state.reviews} limit={4} showPrice="false"/>
          <div>
            <button style={containerStyles.moreButton} onClick={this.showMore}>+ More</button>
          </div>
          <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.toggleModal}/>
          <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
        </div>
      );
    } else {
      return (
        <div style={containerStyles.container}>
          <h2 style={containerStyles.header}>Reviews</h2>
          <ReviewContainer reviews={this.state.reviews} limit={20} showPrice="false"/>
          <button style={containerStyles.readAllButton}>Read All Reviews (111)</button>
          <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.toggleModal}/>
          <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
        </div>
      );
    }
  }
}

export default Container;