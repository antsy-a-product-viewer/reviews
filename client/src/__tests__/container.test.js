import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Container from '../components/Container.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const container = shallow(<Container />);
  
  expect(container).toMatchSnapshot();
});

it('should call getReviews during componentDidMount', () => {
  const getReviews = jest.spyOn(Container.prototype, 'getReviews');
  const container = mount(<Container />);

  expect(getReviews).toHaveBeenCalledTimes(1);
});