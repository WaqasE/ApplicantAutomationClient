import React from 'react';

import LogoBlue from '../assets/logoBlue.svg'


function LandingNav(props) {
    return (
        <div id='landingNav'>
            <div id='landingNavLeft'>
                <img src={LogoBlue} alt='svg' id='landingLogo' />
                <div id='landingLinksWrap'>
                    <div id='landingLink'>
                        <p>Pricing</p></div>
                    <div id='landingLink'>
                        <p>About us</p></div>
                    <div id='landingLink'>
                        <p>Why us</p></div>
                </div>
            </div>
            <div id='landingNavRight'>
                <div id='landingNavBtn'>Log-in</div>
                <div id='landingNavBtn'>Order Now</div>
            </div>
        </div>
    );
}

export default LandingNav;