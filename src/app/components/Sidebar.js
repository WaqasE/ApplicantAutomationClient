import React from 'react';

import LogoWhite from '../assets/logoWhite.svg'
import Icon from '@material-ui/core/Icon'
import colors from '../config/colors';


function Sidebar() {
    return (
        <div id='sidebar'>
            <img src={LogoWhite} alt='svg' id='logo' />
            <div id='itemsWrapper'>
                <div id='item'>
                    <Icon id='itemIcon'>dashboard</Icon>
                    <p id='itemText'>Home</p>
                </div>
                <div id='item'>
                    <Icon id='itemIcon'>add_circle</Icon>
                    <p id='itemText'>New</p>
                </div>
                <div id='item'>
                    <Icon id='itemIcon'>receipt</Icon>
                    <p id='itemText'>Temps</p>
                </div>
            </div>
            <div id='itemsFooterWrapper'>
                <div id='item'>
                    <Icon id='itemIcon'>settings</Icon>
                    <p id='itemText'>Settings</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;