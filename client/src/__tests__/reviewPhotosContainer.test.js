import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewPhotosContainer from '../components/ReviewPhotosContainer.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with reviewImages from props', () => {
  const reviewImages = [
    {
      'review_id': 119,
      'img_url': 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/00119.jpg'
    },
    {
      'review_id': 35,
      'img_url': 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/00035.jpg'
    },
    {
      'review_id': 48,
      'img_url': 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/00048.jpg'
    },
    {
      'review_id': 141,
      'img_url': 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/00141.jpg'
    },
    {
      'review_id': 164,
      'img_url': 'https://s3-us-west-1.amazonaws.com/antsyreviewimages/00164.jpg'
    }
  ];
  const props = {
    reviewImages: reviewImages
  };
  const reviewPhotosContainer = shallow(<ReviewPhotosContainer reviewImages={props.reviewImages}/>);
  
  expect(reviewPhotosContainer).toMatchSnapshot();
});