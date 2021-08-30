import React from 'react';
import Icon from '@material-ui/core/Icon'

import Colors from '../config/colors'

function PaymentInput({ title, icon, placeholder, style, error, ...otherProps }) {
    return (
        <div id='paymentInputField' style={style}>
            <p id='h5' style={{ color: 'grey', fontSize:'12px' }}>{title}</p>
            <div id='paymentInputWrap' style={{ border: error ? `1.5px solid ${Colors.error}` : ''}}>
                <Icon style={{ color: 'grey', fontSize: 15 }}>{icon}</Icon>
                <input id='input' placeholder={placeholder} {...otherProps} />
            </div>
        </div >  
    );
}

export default PaymentInput;