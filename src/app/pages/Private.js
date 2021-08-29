import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import PopUp from '../components/PopUp';

import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

function Private() {
    const [popUpActive, setPopUpActive] = useState(false);
    return (
        <div id='app'>
            <Sidebar />
            <div id='page'>
                <Nav popUpActive={popUpActive} setPopUpActive={setPopUpActive} />
                <Dashboard />
                {popUpActive && <PopUp />}
            </div>
        </div >
    );
}

export default Private;