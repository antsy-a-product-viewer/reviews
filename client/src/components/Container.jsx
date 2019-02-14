import React from 'react';
import axios from 'axios';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx';
import styles from './css/containerStyles.css.js';
import ReviewContainer from './ReviewContainer.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.getReviewInfo = this.getReviewInfo.bind(this);
    this.getReviewImages = this.getReviewImages.bind(this);
    this.state = {
      showModal: false,
      reviews: [],
      reviewImages: []
    };
  }

  componentDidMount() {
    this.getReviewInfo(1);
    this.getReviewImages(1);
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
  
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Reviews</h2>
        <ReviewContainer showPrice="false"/>
        <ReviewPhotosContainer reviewImages={this.state.reviewImages} openModal={this.toggleModal}/>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
      </div>
    );
  }
}

export default Container;