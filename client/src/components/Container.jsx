import React from 'react';
import Review from './Review.jsx';
import ReviewPhotosContainer from './ReviewPhotosContainer.jsx';
import styles from './containerStyles.css.js';

class Container extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    )
  }
}

export default Container;