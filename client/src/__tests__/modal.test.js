import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Modal from '../components/Modal.jsx';

configure({ adapter: new Adapter() });

it('should render correctly when props.showModal is true', () => {
  const props = {
    showModal: true
  }
  const modal = shallow(<Modal showModal={props.showModal}/>);
  
  expect(modal).toMatchSnapshot();
});