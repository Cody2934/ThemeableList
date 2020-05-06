import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Characters image="source of image" name="Cody" species="Human" status="Dead on the inside but most people do not know so it is okay" />);
    expect(wrapper).toMatchSnapshot();
  });
});
