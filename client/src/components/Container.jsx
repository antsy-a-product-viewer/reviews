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
    this.getAverageStars = this.getAverageStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.visitItem = this.visitItem.bind(this);
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


  openModal(id) {
    console.log(`openModal with id: ${id}`)
    this.setState({
      modalReview: _.findIndex(this.state.reviews, {review_id: parseInt(id)}),
      showModal: true
    });
  }

  closeModal(e) {
    if (e.target.id === 'modal-overlay' || e.target.id === 'close-modal') {
      this.setState({
        showModal: !this.state.showModal,
        modalReview: null
      });
    }
  }

  getData() {
    var endpoint = 'http://13.52.66.18' + window.location.pathname + 'store_id';
    axios.get(endpoint)
      .then((res) => {
        const storeId = res.data[0].store_id;
        this.setState({
          storeId: storeId
        });
        this.getReviews(storeId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getReviews(storeId) {
    axios.get(`http://13.52.66.18/stores/${storeId}/reviews`)
      .then((res) => {
        this.getAverageStars(res.data);
        const reviews = res.data; 
        const reviewImages = reviews.filter((item) => {
          return item.review_img !== null;
        });
        this.setState({
          reviews: reviews,
          reviewImages: reviewImages
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
  
  visitItem(productId) {
    window.location.pathname = `/product/${productId}`;
  }
  
  render() {
    return (
      <div style={containerStyles.container}>
        <div style={{display: 'flex', marginBottom: '-10px'}}>
          <div style={containerStyles.header}>
            Reviews
          </div>
          <Star starClass="averageStars" stars={this.state.averageStars}/>
          <div style={containerStyles.centeredDiv}>
            ({this.state.reviews.length})
          </div>
        </div>
        <ReviewContainer reviews={this.state.reviews} limit={this.state.show} showPrice="false" visitItem={this.visitItem} imageClick={this.openModal}/>
        <Button currentNumber={this.state.show} showMore={this.showMore} totalReviews={this.state.reviews.length}/>
        <ReviewPhotosContainer reviews={this.state.reviews} reviewImages={this.state.reviewImages} openModal={this.openModal}/>
        <Modal showModal={this.state.showModal} onClose={this.closeModal} visitItem={this.visitItem} review={this.state.reviews[this.state.modalReview]}/>
      </div>
    );
  }
}


export default Container;