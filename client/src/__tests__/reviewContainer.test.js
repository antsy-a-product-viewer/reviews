import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewContainer from '../components/ReviewContainer';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const review = {
    'review_id': 398,
    'user_img': 'https://s3-us-west-1.amazonaws.com/antsyuserimages/00014.jpg',
    'user_name': 'Stacey Spencer',
    'created_at': '2014-05-01T06:50:00.000Z',
    'stars': 3,
    'review': 'We need to reboot the primary XML circuit!',
    'item_id': 4,
    'item_img': 'https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg',
    'item_name': 'Generic Steel Soap'
  };
  const props = {
    review: review,
    limit: 4,
    showPrice: 'false'
  };
  const reviewContainer = shallow(<ReviewContainer reviews={props.reviews} limit={props.limit} showPrice={props.showPrice}/>);
  
  expect(reviewContainer).toMatchSnapshot();
});