import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() })

import UserProfile from './UserProfile';


describe('should render user pros info', () => {
  //not sure if img key is correct here

  const initialProps = {
    name: 'Rodrigo Vasconcelos de Barros',
    img: true,
    description: 'Software developer living in Munich, Germany. Currently working with ruby and javascript for mobile and web applications.',
    github: 'rodrigopk'
  }

  it('should render the props pass down to the user profile component', () => {
      //hre I'll want to create and instance of the component and see what gets render once the component mounts
      const wrapper = shallow(<UserProfile {...initialProps}/>);
      //find will aloow us to find a specifi item inside this componetn, en este caso no lo
      //necesito pq no llamo a ningun component
      expect(wrapper.find({name: true, img: true, github: true}));
  });
});
