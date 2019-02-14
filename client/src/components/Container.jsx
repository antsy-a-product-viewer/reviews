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
    this.getAverageStars(9);
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

var fakeReviews = [
  {
      "review_id": 532,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00010.jpg",
      "user_name": "Jalen Paucek",
      "created_at": "2014-02-15T21:43:09.000Z",
      "stars": 5,
      "review": "You can't connect the pixel without overriding the auxiliary RSS card!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 119,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00027.jpg",
      "user_name": "Zella Blick",
      "created_at": "2014-03-14T22:37:45.000Z",
      "stars": 4,
      "review": "Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 35,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00024.jpg",
      "user_name": "Deangelo Schuppe",
      "created_at": "2014-03-27T15:37:49.000Z",
      "stars": 0,
      "review": "I'll generate the cross-platform COM firewall, that should driver the XSS pixel!",
      "item_id": 91,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg",
      "item_name": "Rustic Metal Chair"
  },
  {
      "review_id": 398,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00014.jpg",
      "user_name": "Stacey Spencer",
      "created_at": "2014-05-01T06:50:00.000Z",
      "stars": 3,
      "review": "We need to reboot the primary XML circuit!",
      "item_id": 4,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg",
      "item_name": "Generic Steel Soap"
  }
]

export default Container;