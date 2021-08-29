import React from 'react';

import Icon from '@material-ui/core/Icon'


function PopUp() {
    return (
        <div id='accountPopUp'>
            <div id='accountPopUpItem'>
                <Icon id='accountPpIcon'>edit</Icon>
                <p id='accountPopUpItemText'>Edit Profile</p>
            </div>
            <div id='accountPopUpItem'>
                <Icon id='accountPpIcon'>help_outline</Icon>
                <p id='accountPopUpItemText'>Help</p>
            </div>
            <div id='accountPopUpItem'>
                <Icon id='accountPpIcon'>power_settings_new</Icon>
                <p id='accountPopUpItemText'>Logout</p>
            </div>
        </div>
    );
}

export default PopUp;