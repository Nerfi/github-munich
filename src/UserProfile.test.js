import React from 'react';
import Enzyme, { configure, shallow, mount, renderer } from 'enzyme';
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
    //addign before each, we create this because we're always using
    //wrapper = shallow(<UserProfile {...initialProps}/>);
    //in all our of test
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<UserProfile {...initialProps}/>);
    })


  it('renders component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('expecting prop nam eto be there', () => {
    //test not working
    expect(wrapper.props().name === 'Rodrigo Vasconcelos de Barros').toEqual(true);
    //expect(wrapper.prop('name')).to.equal('Rodrigo Vasconcelos de Barros')
  });





});
