import React, { useState } from 'react';

import SearchField from './SearchField';
import Icon from '@material-ui/core/Icon'
import Pic from '../assets/pic.png'
import colors from '../config/colors';

function Nav({ popUpActive, setPopUpActive }) {
    const [img, setImg] = useState(Pic);
    return (
        <div id='nav'>
            <SearchField />
            <div id='navBtnsWrap'>
                <div id='navCreateScript'>
                    <Icon style={{ color: 'white', fontSize: 20, marginRight: 10 }}>add</Icon>
                    <p style={{ fontSize: 12, color: 'white' }}>Create Script</p>
                </div>
                <div id='navBtn'>
                    <Icon style={{ color: 'gray', fontSize: 27 }}>notifications_none</Icon>
                </div>
                <div id='navProfileWrap' onClick={() => { setPopUpActive(!popUpActive) }}>
                    <Icon style={{ color: colors.primary, fontSize: 25 }}>scatter_plot</Icon>
                    <div id='navProfilePic'>
                        {img ? <img src={img} alt='img' /> :
                            <Icon style={{ color: 'grey', fontSize: 23 }}>mood</Icon>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;