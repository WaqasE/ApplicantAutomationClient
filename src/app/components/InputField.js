import React from 'react';
import Icon from '@material-ui/core/Icon'

import Colors from '../config/colors'

function InputField({ title, icon, placeholder, error, ...otherProps }) {
    return (
        <div id='inputField'>
            <p id='h5' style={{ color: 'grey' }}>{title}</p>
            <div id='inputWrap' style={{ border: error ? `1.5px solid ${Colors.error}` : '' }}>
                <Icon style={{ color: 'grey', fontSize: 20 }}>{icon}</Icon>
                <input id='input' placeholder={placeholder} {...otherProps} />
            </div>
        </div>
    );
}

export default InputField;