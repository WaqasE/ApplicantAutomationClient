import React, { useState } from 'react';

import colors from '../config/colors'

import PaymentBg from '../assets/paymentBg.svg';
import MasterCard from '../assets/mastercard.svg';
import Visa from '../assets/visa.svg';
import Paypal from '../assets/PayPal.svg';

function Payment() {
    const [activeNav, setActiveNav] = useState('visa');
    return (
        <div id='payment'>
            <div id='paymentLeft'>
                <img id='paymentSvg' src={PaymentBg} alt='svg' />
            </div>
            <div id='paymentRight'>
                <div id='paymentForm'>
                    <div id='paymentNavigation'>
                        <div id='paymentNavBtn' style={{borderBottom:activeNav==='visa'?`3px solid ${colors['primary']}`:''}}>
                            <img style={{width:'30px', height:'30px', marginRight:'5px'}} id='paymentSvgIcon' src={MasterCard} alt='svg' />
                            <img id='paymentSvgIcon' src={Visa} alt='svg' />
                        </div>
                        <div id='paymentNavBtn' style={{borderBottom:activeNav==='paypal'?`3px solid ${colors['primary']}`:''}}>
                            <img id='paymentSvgIcon' src={Paypal} alt='svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;