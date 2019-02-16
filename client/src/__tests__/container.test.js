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

it('should call getData during componentDidMount', () => {
  const getData = jest.spyOn(Container.prototype, 'getData');
  const container = mount(<Container />);

  expect(getData).toHaveBeenCalledTimes(1);
});

it('should display the modal when showModal state is true', () =>{
  const container = mount(<Container />);
  container.setState({showModal: true});

  expect(container.find('.modal').exists()).toEqual(true);
});
