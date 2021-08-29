import React from 'react';

function CheckBox({ title }) {
    return (
        <div id='checkBoxWrapper'>
            <input type='checkbox' id='checkBox' name="remember"/>
            <label style={{fontSize:15}} for='remember'>{title}</label>
        </div>
    );
}

export default CheckBox;