import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Container from '../components/Container.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const container = shallow(<Container />);
  
  expect(container).toMatchSnapshot();
});