jest.useFakeTimers()
import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from './index';

describe('<Home />', () => {
  it('should render', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
