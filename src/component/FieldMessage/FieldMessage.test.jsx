/* eslint-env jest */

import React from 'react';
import { render } from '@testing-library/react';
import { FieldMessage } from './FieldMessage.jsx';

describe('<Input>', () => {
    test('renders error message if `messages` and `error` is provided', () => {
        const { container } = render(<FieldMessage error={true} messages="foo"/>);
        const actual = container.querySelector('.error > li').textContent;
        const expected = 'foo';

        expect(actual).toEqual(expected);
    });

    test('renders helper if `messages` is provided', () => {
        const { container } = render(<FieldMessage messages="bar" />);
        const actual = container.querySelector('.helper > li').textContent;
        const expected = 'bar';

        expect(actual).toEqual(expected);
    });

    test('renders multi line helper if `messages` is provided', () => {
        const { container } = render(<FieldMessage messages={['foo' ,'bar']} />);
        const actual = container.querySelectorAll('.helper > li').length;
        const expected = 2;

        expect(actual).toEqual(expected);
    });
});
