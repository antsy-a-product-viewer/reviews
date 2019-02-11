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
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      showModal: false
    }
  }

  clickHandler(event) {
    this.setState({
      showModal: !this.state.showModal
    })
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
        <button onClick={this.clickHandler}>Modal</button>
        <Modal showModal={this.state.showModal}/>
      </div>
    )
  }
}

export default Container;