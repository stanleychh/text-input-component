import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src/component/Input';

storiesOf('Input', module)
    .add('with default value', () => (
        <Input type="text" value="this is the default value" />
    ))
    .add('with password input type', () => (
        <Input type="password" value="123" />
    ))
    .add('with number input type', () => (
        <Input type="number" value="3" />
    ))
    .add('with disabled state', () => (
        <Input disabled label="Read only field" />
    ))
    .add('with auto focus selected', () => (
        <Input value="with auto focus" autoFocus />
    ))
    .add('with placeholder (label)', () => (
        <Input label="This is the placeholder" />
    ))
    .add('with one line helper text at bottom', () => (
        <Input messages="This is the helper text" />
    ))
    .add('with multi line helper text at bottom', () => (
        <Input messages={['This is the 1st line of helper text', 'This is the 2nd line of helper text']} />
    ))
    .add('with one line error message at bottom', () => (
        <Input messages="This is a error message" error />
    ))
    .add('with multi line error messages at bottom', () => (
        <Input error messages={['This is the 1st line of helper text', 'This is the 2nd line of helper text']} />
    ));
