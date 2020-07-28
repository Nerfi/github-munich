import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';
import RenderRepos from './render-repos';


configure({adapter: new Adapter()});

describe('Search component', () => {

   let wrapper;
   //hooks and state update
    const setState = jest.fn();
   let useStateSpy = jest.spyOn(React, 'useState')
   useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(()=> {
        wrapper = shallow(<SearchBar/>);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });


    it('renders', () => {

        expect(wrapper.exists()).toBe(true);
    });

    //simulation that the user types in
    it('user text is echoed', () => {

        wrapper.find('input').simulate('change', {
          target: {value: 'working'}
        });

        expect(wrapper.find('input').props().value).toEqual('working')
    });

    //test, we want to check that when the form is submitted, the event is cancelled meaning the default browser submit function isn’t fired.
    it('when the form is submitted the event is cancelled', () => {
        let prevent = false;
        wrapper.find('form').simulate("submit", {
            preventDefault: () => {
              prevent = true;
            }
        });
        expect(prevent).toBe(true);

    });

    //working

    it('It has an input field', () => {
      const input = wrapper.find('.input');
      expect(input.props().value).toBe('');
    });


  //checking that the default value of the field in empty
  it('the default value should be empty', () => {

    const emptyInput = wrapper.find('.input');
   expect(emptyInput.props().value).toBe('');
    //expect(wrapper.find('input[name="email"]').prop('value')).toBe('');


  });
  //working
  it('renders child component', () => {
    expect(wrapper.containsMatchingElement(<RenderRepos />)).toEqual(true);

  });


});
