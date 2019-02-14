import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx';
import styles from './css/containerStyles.css.js';
import ReviewContainer from './ReviewContainer.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.getReviewInfo =this.getReviewInfo.bind(this);
    this.state = {
      showModal: false,
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviewInfo(1);
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
  
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Reviews</h2>
        <ReviewContainer showPrice="false"/>
        <ReviewPhotosContainer openModal={this.toggleModal}/>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
      </div>
    );
  }
}

export default Container;