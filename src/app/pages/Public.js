import React, { useContext, useState } from 'react';

import LandingNav from '../components/LandingNav';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import Footer from '../components/Footer';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import Payment from './Payment';

import Routes from '../context/routes';

function Public() {
    const { activeRoute } = useContext(Routes);
    const Router = () => {
        switch (activeRoute) {
            case '/': return <LandingPage />;
            case '/login': return <Login />;
            case '/pricing': return <Pricing />;
            case '/aboutUs': return <AboutUs />;
            case '/payment': return <Payment />;
            default: return <LandingPage />;
        }
    }
    return (
        <div id='public'>
            <LandingNav />
            <Router />
            <Footer />
        </div>
    );
}

export default Public;