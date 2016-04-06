import ListItem from './index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<List />', () => {
  it('should adopt the className', () => {
    const renderedComponent = shallow(<ListItem className="test" />);
    expect(renderedComponent.find('li').hasClass('test')).toEqual(true);
  });

  it('should render the content passed to it', () => {
    const content = 'Hello world!';
    const renderedComponent = shallow(
      <ListItem content={content} />
    );
    expect(renderedComponent.contains(content)).toEqual(true);
  });
});
