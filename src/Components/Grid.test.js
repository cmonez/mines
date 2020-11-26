import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
configure({ adapter: new Adapter() });

describe('Should render the app', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Account header', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Minesweeper!</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
