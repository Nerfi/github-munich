import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderRepos from './render-repos';

configure({adapter: new Adapter()});

//aqui lo que voy a testear esque la API call sea buena
