import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Item from '../components/Item.jsx';

configure({ adapter: new Adapter() });

it('should render price with if props.price is set to true', () => {
  const item = shallow(<Item price='true'/>);
  
  expect(container).toMatchSnapshot();
});