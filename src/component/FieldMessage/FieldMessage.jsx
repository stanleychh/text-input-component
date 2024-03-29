import React from 'react';
import PropTypes from 'prop-types';
import { castArray, isEmpty } from 'lodash/fp';

import styles from './FieldMessage.module.css'

export function FieldMessage({ messages, error }) {
    if (isEmpty(messages)) {
        return null;
    }

    const classname = (error) ? styles.error : styles.helper;

    return(
        <ul className={classname}>
            {castArray(messages).map((msg) => (
                <li key={msg}>{msg}</li>
            ))}
        </ul>
    );
}

FieldMessage.displayName = 'FieldMessage';

FieldMessage.propTypes = {
    messages: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    error: PropTypes.bool
};

FieldMessage.defaultProps = {
    messages: [],
    error: false
};
