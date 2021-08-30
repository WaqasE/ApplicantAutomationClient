import React, { useState } from 'react';

import colors from '../config/colors'

import PaymentBg from '../assets/paymentBg.svg';
import MasterCard from '../assets/mastercard.svg';
import Visa from '../assets/visa.svg';
import Paypal from '../assets/PayPal.svg';
import PaymentInput from '../components/PaymentInput';
import PaymentSubmitButton from '../components/PaymentSubmitButton';


function Payment() {
    const [activeNav, setActiveNav] = useState('visa');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('')

    return (
        <div id='payment'>
            <div id='paymentLeft'>
                <img id='paymentSvg' src={PaymentBg} alt='svg' />
            </div>
            <div id='paymentRight'>
                <div id='paymentFormWrapper'>
                    <div id='paymentNavigation'>
                        <div onClick={() => { setActiveNav('visa') }} id='paymentNavBtn' style={{ borderBottom: activeNav === 'visa' ? `3px solid #f79e1b` : '' }}>
                            <img style={{ width: '30px', height: '30px', marginRight: '5px' }} id='paymentSvgIcon' src={MasterCard} alt='svg' />
                            <img id='paymentSvgIcon' src={Visa} alt='svg' />
                        </div>
                        <div onClick={() => { setActiveNav('paypal') }} id='paymentNavBtn' style={{ borderBottom: activeNav === 'paypal' ? `3px solid #3b7bbf` : '' }}>
                            <img id='paymentSvgIcon' src={Paypal} alt='svg' />
                        </div>
                    </div>
                    <div id='paymentForm'>
                        <PaymentInput
                            title='CardHolder Name'
                            icon='person'
                            placeholder='Name'
                            onChange={ev => setName(ev.target.value)}
                            error={error}
                            value={name}
                        />
                        <PaymentInput
                            title='Card Number'
                            icon='credit_card'
                            placeholder='Card Number'
                            onChange={ev => setCardNumber(ev.target.value)}
                            error={error}
                            value={cardNumber}
                        />
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <PaymentInput
                                title='Expiration Date'
                                icon='date_range'
                                placeholder='Expiration Date'
                                onChange={ev => setExpirationDate(ev.target.value)}
                                error={error}
                                value={expirationDate}
                                style={{width:'55%', paddingRight:'0px'}}
                            />
                            <PaymentInput
                                title='CVV'
                                icon='vpn_key'
                                placeholder='CVV'
                                onChange={ev => setCvv(ev.target.value)}
                                error={error}
                                value={cvv}
                                style={{width:'35%', paddingLeft:'0px'}}
                            />
                        </div>
                        <PaymentSubmitButton title='Buy Now'   active={name && cardNumber && expirationDate && cvv}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;