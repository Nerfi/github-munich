import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() })

import UserProfile from './UserProfile';


describe('should render user pros info', () => {
  //not sure if img key is correct here

  const initialProps = {
    name: 'Rodrigo Vasconcelos de Barros',
    img: 'https://avatars2.githubusercontent.com/u/1158435?v=4',
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

  //this one is working
  it('renders component', () => {
    expect(wrapper.exists()).toBe(true);
  });



  //NEW testing from youtube video
  it('it render the correct profile name', () => {
    //not working this shit
    const text = wrapper.find('.column h2').text();
    expect(text).toEqual(initialProps.name);
    //expect(wrapper.find('userName').text().toEqual(initialProps.name))
  });





});
