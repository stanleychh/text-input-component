import React, { useState } from 'react';
import { Input } from './component/Input';
import './App.css';

import { isNil } from 'lodash/fp';
import { isEmailDataValid } from './common/utils';
import { INVALID_EMAIL, ENTER_EMAIL, VALID_EMAIL } from './common/constants';

function App() {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [messages, setMessages] = useState(ENTER_EMAIL);

    const [address, setAddress] = useState('');

    const handleBlur = (value) => {
        if (isNil(value)) {
            setMessages(ENTER_EMAIL);
        } else {
            const isValid = isEmailDataValid(value);
            const msg = (isValid) ? VALID_EMAIL: INVALID_EMAIL;

            setError(!isValid);
            setMessages(msg);
        }
    };

    return (
        <div className="App">
            <Input type="text"  value={value}  onBlur={ handleBlur } onChange={ setValue } error={ error } messages={ messages } label="Email" />
            <br />
            <Input type="text" messages="Please enter full address" label="Address" value={address} onChange={setAddress} />
            <br />
            <Input messages={['This is not editable', 'You do not have the permission']} disabled={ true } value="This is a ready only field" />
            <br />
        </div>
    );
}

export default App;
