import React from 'react';

import colors from '../config/colors';

function Button({btnTitle, btnActive}) {
    return (
        <div id='button' style={{background:btnActive?colors['primary']:''}}>
            <p style={{color:btnActive?'white':''}}>{btnTitle}</p>
        </div>
    );
}

export default Button;