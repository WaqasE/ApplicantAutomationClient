import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon'

import Calender from '../components/Calender';
import Card from '../components/Card';
import ScriptCard from '../components/ScriptCard';
import Footer from '../components/Footer';


function Dashboard() {
    const [name, setName] = useState('Waqas');
    return (
        <div id='dashboard'>
            <div id='dashboardLeft'>
                <p id='dashboardHeading'>Hello {name}, </p>
                <div id='dashboardCardsWrap'>
                    <Card title='New Script' icon='add' />
                    <Card title='Total Scripts' count='0' icon='functions' />
                    <Card title='Drafts' count='0' icon='assignment' />
                </div>
                <div id='dashboardScripts'>
                    <p id='dashboardHeading' style={{ fontSize: 15 }}>Scripts</p>
                    <div id='scriptCardWrapper'>
                        <ScriptCard title='Test' category='Information Products' date='apr 21, 2021'/>
                        <ScriptCard title='script' category='Care Giver' date='jun 18, 2021'/>
                        <ScriptCard title='new script' category='Care Giver' date='jul 1, 2021'/>
                    </div>
                </div>
            </div>
            <div id='dashboardRight'>
                <Calender />
                <div id='dashboardVideo'>
                    <div id='dashboardVideoWrap'>
                        <div id='dashboardVideoBtn'>
                            <Icon style={{ color: 'white', fontSize: 40 }}>play_arrow</Icon>
                        </div>
                        <div id='videoFotter'>
                            <p>How to use applicant automation </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;