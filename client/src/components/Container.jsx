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
    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        {/* <h2 style={h1Style}>Reviews</h2>
        <Review />
        <Review />
        <Review />
        <Review />
        <ReviewPhotosContainer /> */}
        <Modal showModal={this.state.showModal}/>
      </div>
    )
  }
}

export default Container;