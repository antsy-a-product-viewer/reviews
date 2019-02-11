import React from 'react';
import Review from './Review.jsx';

const h1Style = {
  fontSize: "20px",
}

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
// font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  render() {
    return (
      <div>
        <h2 style={h1Style}>Reviews</h2>
        <Review />
      </div>
    )
  }
}

export default Container;