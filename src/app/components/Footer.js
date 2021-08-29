import React from 'react';
import Icon from '@material-ui/core/Icon'

import LogoGrey from '../assets/logoGrey.svg'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';


const date = new Date();

function Footer() {
    return (
        <div id='footer'>
            <div id='footerLeft'>
                <img src={LogoGrey} alt='svg' id='footerLogo' />
                <p id='footerText'>© Applicant Automation. {date.getFullYear()}</p>
            </div>
            <div id='footerRight'>
                <div id='footerIcon'>
                    <TwitterIcon style={{ color: 'grey', fontSize: 20 }}/>
                </div>
                <div id='footerIcon'>
                    <Icon style={{ color: 'grey', fontSize: 20 }}>facebook</Icon>
                </div>
                <div id='footerIcon'>
                    <LinkedInIcon style={{ color: 'grey', fontSize: 20 }}/>
                </div>
                <div id='footerIcon'>
                    <PinterestIcon style={{ color: 'grey', fontSize: 20 }}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;