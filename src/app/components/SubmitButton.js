import React from 'react';

function SubmitButton({ title, active, onClick }) {
    return (
        <div id='submitButton' onClick={active ? onClick : null} style={{ background: active ? '#0077ff' : 'grey' }}>
            <p style={{ fontSize: 16, color: 'white' }}>{title}</p>
        </div>
    );
}

export default SubmitButton;