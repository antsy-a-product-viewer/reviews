import React from 'react';
import Review from './Review.jsx';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import Modal from './Modal.jsx';

const containerStyle = {
  width: 750
}

const h1Style = {
  fontSize: 20,
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    }
  }

  toggleModal() {
    console.log('toggleModal in container hit')
    this.setState({
      showModal: !this.state.showModal
    })
  }

  // create a function to select which image to display on modal popup

  render() {
    return (
      <div style={containerStyle}>
        <h2 style={h1Style}>Reviews</h2>
        <Review />
        <Review />
        <Review />
        <Review />
        <ReviewPhotosContainer />
        <button onClick={this.toggleModal}>Modal</button>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}  children="This is a test"/>
      </div>
    )
  }
}

export default Container;