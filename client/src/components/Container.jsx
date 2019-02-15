import React from 'react';
import axios from 'axios';
import _ from 'underscore';
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
      reviews: [],
      reviewImages: [],
      showModal: false,
      showMore: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
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
        // this works but it takes a really long time to render the images
      });
  }

  getReviews(storeId) {
    axios.get(`/stores/${storeId}/reviews`)
      .then((res) => {
        this.getAverageStars(res.data);
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
      showMore: !this.state.showMore
    });
  }


  
  render() {
    if (!this.state.showMore) {
      return (
        <div style={containerStyles.container}>
          <div style={{display: 'flex'}}>
            <h2 style={containerStyles.header}>Reviews</h2>
            <div style={{alignSelf: 'center', marginLeft: 10}}>
              {_.times(this.state.averageStars, (n) =>{
                return (
                  <img key={n} style={{width: '20px', height: '20px'}} src="https://s3-us-west-1.amazonaws.com/anstyicons/icon-star-512.png"></img>
                );
              })}
            </div>
            <div style={{alignSelf: 'center', marginLeft: 10}}>({this.state.reviews.length})</div>
          </div>
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
            {_.times(5, (n) =>{
              return (
                <img key={n} style={{
                  width: '20px',
                  height: '20px'
                }} src="https://s3-us-west-1.amazonaws.com/anstyicons/icon-star-512.png"></img>
              );
            })}
          </div>
          <ReviewContainer reviews={this.state.reviews} limit={20} showPrice="false"/>
          <button style={containerStyles.readAllButton}>Read All Reviews ({this.state.reviews.length})</button>
          <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.toggleModal}/>
          <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
        </div>
      );
    }
  }
}

export default Container;