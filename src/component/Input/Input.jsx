import React, {useRef, useLayoutEffect, useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { isNil, noop, toString, toNumber } from 'lodash/fp';

import styles from './Input.module.css';
import { FieldMessage } from "../FieldMessage";

function cast(type, value) {
    switch (type) {
        case 'number':
            return toNumber(value);
        case 'text':
        case 'password':
            return toString(value);
        default:
            return value;
    }
}

const useEventCallback = (type, callback) =>
    useCallback((event) => callback(cast(type, event.target.value)), [type, callback]);

export function Input({
      id,
      name,
      value,
      label,
      onChange,
      onBlur,
      type,
      error,
      autoFocus,
      disabled,
      className,
      messages,
      ...props
}) {
    const [currentValue, setCurrentValue] = useState(value);
    const input = useRef(null);

    const handleChange = useEventCallback(type, onChange);
    const handleBlur = useEventCallback(type, onBlur);

    useEffect(() => {
        setCurrentValue(value);
    },[value]);

    useLayoutEffect(() => {
        if (autoFocus) {
            input.current.focus();
        }
    });

    return (
        <div className={styles['form-group']}>
            <input
                type={type}
                ref={input}
                name={name}
                value={isNil(currentValue) ? '' : toString(currentValue)}
                className={className}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                aria-invalid={error}
                placeholder="&nbsp;"
            />
            <label className={styles['input-placeholder']}>{ label }</label>
            <FieldMessage error={error} messages={messages} />
        </div>
    );
}

Input.displayName = 'Input';

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    messages: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

Input.defaultProps = {
    className: '',
    name: null,
    id: null,
    autoFocus: false,
    disabled: false,
    label: null,
    value: '',
    onChange: noop,
    onBlur: noop,
    type: 'text',
    error: false,
    messages: ''
};
