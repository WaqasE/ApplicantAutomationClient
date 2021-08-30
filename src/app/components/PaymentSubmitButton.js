import React from 'react';

function PaymentSubmitButton({ title, active, onClick }) {
    return (
        <div id='paymentSubmitButton' onClick={active ? onClick : null} style={{ background: active ? '#0077ff' : 'grey' }}>
            <p style={{ fontSize: 12, color: 'white' }}>{title}</p>
        </div>
    );
}

export default PaymentSubmitButton;