import React, { useState } from 'react';
import PricingCard from '../components/PricingCard'


import Triangles from '../assets/triangles.svg'
import colors from '../config/colors';

const lite = [
    {
        id: 1,
        count: '1',
        text: 'Sales Letters'
    },
    {
        id: 2,
        count: '1',
        text: 'Email Sequences'
    },
    {
        id: 3,
        count: '1',
        text: 'Email Singular'
    },
    {
        id: 4,
        count: '1',
        text: 'Facebook Ads'
    },
    {
        id: 5,
        count: '1',
        text: 'Facebook CTAs'
    },
    {
        id: 6,
        count: '1',
        text: 'Google AdWords'
    },
    {
        id: 7,
        count: '1',
        text: 'Headlines'
    },
    {
        id: 8,
        count: '1',
        text: 'Info Products'
    },
    {
        id: 9,
        count: '1',
        text: 'Optin Pages'
    },
    {
        id: 10,
        count: '1',
        text: 'Optin Bumps'
    },
    {
        id: 11,
        count: '1',
        text: 'Phone Scripts'
    },
    {
        id: 12,
        count: '1',
        text: 'CTAs'
    },
    {
        id: 13,
        count: '1',
        text: 'Testimonials'
    },
    {
        id: 14,
        count: '1',
        text: 'Upsells'
    },
    {
        id: 15,
        count: '1',
        text: 'Video Scripts'
    },
    {
        id: 16,
        count: '1',
        text: 'Webinar Outline'
    },
    {
        id: 17,
        count: '1',
        text: 'Webinar Promotion'
    },
];
const standard = [
    {
        id: 1,
        count: '3',
        text: 'Sales Letters'
    },
    {
        id: 2,
        count: '5',
        text: 'Email Sequences'
    },
    {
        id: 3,
        count: '10',
        text: 'Email Singular'
    },
    {
        id: 4,
        count: '2',
        text: 'Facebook Ads'
    },
    {
        id: 5,
        count: '1',
        text: 'Facebook CTAs'
    },
    {
        id: 6,
        count: '2',
        text: 'Google AdWords'
    },
    {
        id: 7,
        count: '2',
        text: 'Headlines'
    },
    {
        id: 8,
        count: '1',
        text: 'Info Products'
    },
    {
        id: 9,
        count: '1',
        text: 'Optin Pages'
    },
    {
        id: 10,
        count: '1',
        text: 'Optin Bumps'
    },
    {
        id: 11,
        count: '3',
        text: 'Phone Scripts'
    },
    {
        id: 12,
        count: '1',
        text: 'CTAs'
    },
    {
        id: 13,
        count: '1',
        text: 'Testimonials'
    },
    {
        id: 14,
        count: '2',
        text: 'Upsells'
    },
    {
        id: 15,
        count: '3',
        text: 'Video Scripts'
    },
    {
        id: 16,
        count: '1',
        text: 'Webinar Outline'
    },
    {
        id: 17,
        count: '1',
        text: 'Webinar Promotion'
    },
];
const enterprise = [
    {
        id: 1,
        count: '10',
        text: 'Sales Letters'
    },
    {
        id: 2,
        count: '16',
        text: 'Email Sequences'
    },
    {
        id: 3,
        count: '33',
        text: 'Email Singular'
    },
    {
        id: 4,
        count: '5',
        text: 'Facebook Ads'
    },
    {
        id: 5,
        count: '2',
        text: 'Facebook CTAs'
    },
    {
        id: 6,
        count: '5',
        text: 'Google AdWords'
    },
    {
        id: 7,
        count: '5',
        text: 'Headlines'
    },
    {
        id: 8,
        count: '1',
        text: 'Info Products'
    },
    {
        id: 9,
        count: '5',
        text: 'Optin Pages'
    },
    {
        id: 10,
        count: '1',
        text: 'Optin Bumps'
    },
    {
        id: 11,
        count: '10',
        text: 'Phone Scripts'
    },
    {
        id: 12,
        count: '1',
        text: 'CTAs'
    },
    {
        id: 13,
        count: '5',
        text: 'Testimonials'
    },
    {
        id: 14,
        count: '5',
        text: 'Upsells'
    },
    {
        id: 15,
        count: '10',
        text: 'Video Scripts'
    },
    {
        id: 16,
        count: '2',
        text: 'Webinar Outline'
    },
    {
        id: 17,
        count: '5',
        text: 'Webinar Promotion'
    },
];

function Pricing() {
    const [activeDeal, setActiveDeal] = useState('monthly');

    return (
        <div id='pricing'>
            <div id='pricingHeader'>
                <div id='prcingCircleLeft' />
                <div id='prcingCircleRight' />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: '20px' }}>PRICING</p>
                <img id='triangles' src={Triangles} alt='triangles' />
                <p id='pricingHeading'>Start Creating Your First Sales Message In The Next 60 Seconds!</p>
                <div id='headerNav'>
                    <div onClick={() => setActiveDeal('monthly')} style={{ background: activeDeal === 'monthly' ? colors['background'] : '', color: activeDeal === 'monthly' ? colors['primary'] : '' }}>Monthly</div>
                    <div onClick={() => setActiveDeal('annual')} style={{ background: activeDeal === 'annual' ? colors['background'] : '', color: activeDeal === 'annual' ? colors['primary'] : '' }}>Annual</div>
                </div>
            </div>
            <div id='pricingCardsWrapper'>
                <PricingCard title='Lite' tagLine='Hit the ground running.' btnTitle='Start Free Trial' price={activeDeal==='monthly'?'$19':'$29'} detail={lite} activeDeal={activeDeal} />
                <PricingCard title='Standard' tagLine='Power-up your business.' btnTitle='Get Started' btnActive={true} price={activeDeal==='monthly'?'$39':'$49'} detail={standard} activeDeal={activeDeal} />
                <PricingCard title='Enterprise' popular={true} tagLine='Customized just for you.' btnTitle='Join Enterprise' price={activeDeal==='monthly'?'$69':'$79'} detail={enterprise} activeDeal={activeDeal} />
            </div>

        </div>
    );
}

export default Pricing;