import React, { useState } from 'react';
import './app/styles/desktop.css'
import Private from './app/pages/Private';
import Public from './app/pages/Public';

import Routes from './app/context/routes';

function Main() {
    const [user, setUser] = useState(false);
    const [activeRoute, setActiveRoute] = useState('/payment');

    return (
        <Routes.Provider value={{ activeRoute, setActiveRoute }}>
            {
                !user ?
                    <Public />
                    :
                    <Private />
            }
        </Routes.Provider>
    )
}
export default Main;