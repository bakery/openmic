/**
 * Test the repo list item
 */

import { RepoListItem } from './index';
import ListItem from 'ListItem';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<RepoListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/mxstbr/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'mxstbr/react-boilerplate',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toEqual(1);
  });

  it('should not render the current username', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} currentUser={item.owner.login} />
    );
    expect(renderedComponent.text().indexOf(item.owner.login)).toBeLessThan(0);
  });

  it('should render usernames that are not the current one', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} currentUser="nikgraf" />
    );
    expect(renderedComponent.text().indexOf(item.owner.login)).toBeGreaterThan(-1);
  });

  it('should render the repo name', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.name)).toBeGreaterThan(-1);
  });

  it('should render the issue count', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.open_issues_count)).toBeGreaterThan(1);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    console.log(renderedComponent.debug());
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});
