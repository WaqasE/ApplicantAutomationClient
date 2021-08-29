import React from 'react';

import LandingNav from '../components/LandingNav';
import Icon from '@material-ui/core/Icon'
import Bg from '../assets/bg.svg'


function LandingPage() {
    return (
        <div id='landingPage'>
            <div id='landingHeader'>
                <div id='landingHeaderLeft'>
                    <p id='businessHeading'>Why settle on less? lets sell <span>more.<div id='mark' /></span></p>
                    <p id='businessSubHeading'>Powerful new software shortcuts the process of writing great sales letters, emails, vsl scripts, webinar slides, ads & more!</p>
                    <div id='landingHeaderBtn'><Icon id='landingHeaderBtnIcon' style={{ color: 'white', fontSize: 20, marginRight: 8 }}>whatshot</Icon>Buy Now</div>
                </div>
                <div id='landingHeaderRight'>
                    <img src={Bg} alt='bg' id='landingBg' />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;