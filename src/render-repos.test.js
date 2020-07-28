import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderRepos from './render-repos';

configure({adapter: new Adapter()});

//aqui lo que voy a testear esque la API call sea buena
//describe('it should render the default repos', () => {

  //let wrapper;
  //let props;
  //let useEffect;

  //let repos = [{name: 'repo name', description: 'some repo description', language: 'Ruby', pushed_at: '2020-08-16'}]

  //mocking useEffect hook
  //from here https://blog.carbonfive.com/shallow-testing-hooks-with-enzyme/
  //const mockUseEffect = () => {
    //useEffect.mockImplementationOnce(f => f());
  //};

 // beforeEach(() => {

    //useEffect = jest.spyOn(React, "useEffect");

    //props = {

      //fetchRepos: jest.fn().mockResolvedValue(repos)

   // };
    //calling the mocking function
   // mockUseEffect();
    //mockUseEffect();

   // wrapper = shallow(<RenderRepos repo={''} {...props}/>);

 // });



  // it('renders', () => {

        //expect(wrapper.exists()).toBe(true);
    //});

   //describe('on start', () => {

    //not working
   // it('loads the repos', () => {

     // const respositories = useEffect
     // expect(respositories).toHaveBeenCalled();
    //});

      //working
     // it("does not load repos", () => {
      //expect(props.fetchRepos).not.toHaveBeenCalled();
    //});

   //});



//});


//starting new test from https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875

//creating mocking repositories to test API call on render

const mockedRepos = [
  {
    name: 'repo name',
    description: 'some repo description',
    language: 'Ruby',
    pushed_at: '2020-08-16'
  },
  {
    name: 'another repo',
    description: 'some description',
    language: 'JS',
    pushed_at: '2020-08-16'
  }
];


describe('RenderRepos componet', () => {
  //working
  it('renders', () => {
      const wrapper = shallow(<RenderRepos repo={''} {...mockedRepos} />)
  });
  //working
  it('returns the array with default repos', ()=> {
    const wrapper = shallow(<RenderRepos  repo={''} {...mockedRepos}/>);
    expect(wrapper).toMatchSnapshot();

  });

  //does have the same length

  it('does have the same length', () => {

    const wrapper = shallow(<RenderRepos repo={''} {...mockedRepos}/>)
    const listItem = wrapper.find("ul");
    expect(listItem).toHaveLength(0)

  });

  //renders the repos when query is change

  //it('render repos when query change', () => {
    //const wrapper = shallow(<RenderRepos repo={''} />)
    //wrapper.setProps({
      //repo: 'new query'
    //});
    //expect(wrapper.find('.searchedRepos h2'))

  //});

});


