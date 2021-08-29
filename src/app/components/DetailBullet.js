import React from 'react';
import colors from '../config/colors';

import Icon from '@material-ui/core/Icon'

function DetailBullet({ count, detail }) {
    return (
        <div id='detailBullet'><Icon style={{ color: 'black', fontSize: 22, marginRight:10 }}>check</Icon><p><span style={{ color: colors['primary'], fontSize:'15px', marginRight:'5px', fontWeight:'600' }}>{count}</span> {detail}</p></div>
    );
}

export default DetailBullet;