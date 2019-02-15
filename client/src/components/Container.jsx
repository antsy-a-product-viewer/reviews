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
    this.getData = this.getData.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewImages = this.getReviewImages.bind(this);
    this.getAverageStars = this.getAverageStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.state = {
      storeId: 0,
      averageStars: 0,
      showModal: false,
      reviews: [],
      reviewImages: [],
      showMore: false,
    };
  }

  componentDidMount() {
    this.getData(100);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  getData(itemId) {
    console.log(`getData called`);
    axios.get(`/items/${itemId}`)
      .then((res) => {
        var storeId = res.data[0].store_id;
        this.setState({
          storeId: storeId
        });
        console.log(storeId);
        this.getReviews(storeId);
        this.getReviewImages(storeId);
        // this works but it takes a really long time to render the images
      });
  }

  getReviews(storeId) {
    console.log(`getReviews called`);
    axios.get(`/stores/${storeId}/reviews`)
      .then((res) => {
        this.getAverageStars(res.data);
        this.setState({
          reviews: res.data
        });
      }); 
  }

  getReviewImages(storeId) {
    console.log(`storeId inside of reviewImages: ${storeId}`)
    axios.get(`/stores/${storeId}/review_images`)
      .then((res) => {
        this.setState({
          reviewImages: res.data
        });
      });
  }

  getAverageStars(reviews) {
    console.log(`getAverageStores hit`);
    var average;
    var total = 0;
    for (var i = 0; i < reviews.length; i++) {
      total += reviews[i].stars;
    }
    console.log(`total stars: ${total}`);
    average = Math.floor(total / reviews.length);
    console.log(`average stars for store: ${average}`);
    this.setState({
      averageStars: average
    });
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
          <div>
            <h2 style={containerStyles.header}>Reviews</h2>
          </div>
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