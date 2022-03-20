jest.useFakeTimers()
import React from 'react';
import renderer from 'react-test-renderer';

import { ArticlePage } from './index';

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
      ...actualNav,
      useRoute: () => ({
        navigate: jest.fn(),
        dispatch: mockedDispatch,
      }),
    };
});

describe('<ArticlePage />', () => {
    beforeEach(() => {
        mockedDispatch.mockClear();
    });

    it('should render', () => {
        const tree = renderer.create(<ArticlePage />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
