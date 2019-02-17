import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import Star from './Star.jsx';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx';
import containerStyles from './css/containerStyles.css.js';
import ReviewContainer from './ReviewContainer.jsx';
import Button from './Button.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getData = this.getData.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getReviewImages = this.getReviewImages.bind(this);
    this.getAverageStars = this.getAverageStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.state = {
      storeId: 0,
      averageStars: 0,
      reviews: [],
      reviewImages: [],
      showModal: false,
      show: 4,
      modalReview: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  openModal(reviewImgIndex) {
    this.setState({
      modalReview: reviewImgIndex,
      showModal: !this.state.showModal
    });
  }

  closeModal(e) {
    console.log(`e.target.id: ${e.target.id}`);
    if (e.target.id === 'modal-overlay' || e.target.id === 'close-modal') {
      this.setState({
        showModal: !this.state.showModal,
        modalReview: null
      });
    }
  }

  getData() {
    var itemId = Math.floor(Math.random() * 100);
    axios.get(`/items/${itemId}`)
      .then((res) => {
        var storeId = res.data[0].store_id;
        this.setState({
          storeId: storeId
        });
        this.getReviews(storeId);
        this.getReviewImages(storeId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getReviews(storeId) {
    axios.get(`/stores/${storeId}/reviews`)
      .then((res) => {
        this.getAverageStars(res.data);
        this.setState({
          reviews: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  getReviewImages(storeId) {
    axios.get(`/stores/${storeId}/review_images`)
      .then((res) => {
        this.setState({
          reviewImages: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAverageStars(reviews) {
    var total = 0;
    for (var i = 0; i < reviews.length; i++) {
      total += reviews[i].stars;
    }
    var average = Math.floor(total / reviews.length);
    this.setState({
      averageStars: average
    });
  }

  showMore() {
    this.setState({
      show: 20
    });
  }
  
  render() {
    return (
      <div style={containerStyles.container}>
        <div style={{display: 'flex'}}>
          <div style={containerStyles.header}>
            Reviews
          </div>
          <Star stars={this.state.averageStars}/>
          <div style={containerStyles.centeredDiv}>
            ({this.state.reviews.length})
          </div>
        </div>
        <ReviewContainer reviews={this.state.reviews} limit={this.state.show} showPrice="false"/>
        <Button currentNumber={this.state.show} showMore={this.showMore} totalReviews={this.state.reviews.length}/>
        <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.openModal}/>
        <Modal showModal={this.state.showModal} onClose={this.closeModal} review={this.state.reviewImages[this.state.modalReview]}/>
      </div>
    );
  }
}


export default Container;