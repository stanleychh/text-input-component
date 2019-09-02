/* eslint-env jest */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Input } from './Input.jsx';

describe('<Input>', () => {
    test('renders default value if `value` is provided', () => {
        const { container } = render(<Input value="foo" />);
        const actual = container.querySelector('input').value;
        const expected = 'foo';

        expect(actual).toEqual(expected);
    });

    test('renders disabled input if `disabled` is provided', () => {
        const { container } = render(<Input disabled={true} />);
        const actual = container.querySelectorAll(':enabled').length;
        const expected = 0;

        expect(actual).toEqual(expected);
    });

    test('renders label if `label` is provided', () => {
        const { container } = render(<Input label="bar" />);
        const actual = container.querySelector('.input-placeholder').textContent;
        const expected = 'bar';

        expect(actual).toEqual(expected);
    });

    test('renders message (helper text) if `messages` is provided', () => {
        const { container } = render(<Input messages="foo bar" />);
        const actual = container.querySelector('.helper > li').textContent;
        const expected = 'foo bar';

        expect(actual).toEqual(expected);
    });

    test('renders error message if `messages` is provided', () => {
        const { container } = render(<Input messages="error msg" error={true} />);
        const actual = container.querySelector('.error > li').textContent;
        const expected = 'error msg';

        expect(actual).toEqual(expected);
    });

    test('renders multi line helper if `messages` array is provided', () => {
        const { container } = render(<Input messages={['foo' ,'bar']} />);
        const actual = container.querySelectorAll('.helper > li').length;
        const expected = 2;

        expect(actual).toEqual(expected);
    });

    test('triggers onChange handler if `onChange` is provided', () => {
        const handleChange = jest.fn();
        const { container } = render(<Input onChange={handleChange} />);

        fireEvent.change(container.querySelector('input'), { target: { value: 'foo' } });

        expect(handleChange).toHaveBeenCalled();
    });

    test('triggers onBlur handler if `onBlur` is provided', () => {
        const handleBlur = jest.fn();
        const { container } = render(<Input onBlur={handleBlur} messages="foo" />);
        const input = container.querySelector('input');

        fireEvent.focus(input);
        fireEvent.blur(input);

        expect(handleBlur).toHaveBeenCalled();
    });
});
