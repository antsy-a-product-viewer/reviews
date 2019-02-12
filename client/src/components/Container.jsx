import React from 'react';
import Review from './Review.jsx';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx'
import styles from './css/containerStyles.css.js';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    }
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Reviews</h2>
        <Review />
        <Review />
        <Review />
        <Review />
        <ReviewPhotosContainer />
        <button onClick={this.toggleModal}>Modal</button>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}/>
      </div>
    )
  }
}

export default Container;