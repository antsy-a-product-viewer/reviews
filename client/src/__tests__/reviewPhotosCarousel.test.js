import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewPhotosCarousel from '../components/ReviewPhotosCarousel.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const reviewPhotosCarousel = shallow(<ReviewPhotosCarousel />);
  
  expect(reviewPhotosCarousel).toMatchSnapshot();
});