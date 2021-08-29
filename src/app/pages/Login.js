import React, { useState } from 'react';

import LoginSvg from '../assets/login.svg'

import InputField from '../components/InputField';
import CheckBox from '../components/CheckBox';
import SubmitButton from '../components/SubmitButton';
import colors from '../config/colors';
import LandingNav from '../components/LandingNav';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    return (
        <div id='login'>
            <div id='leftBox'>
                <img id='loginSvg' src={LoginSvg} alt="svg" />
            </div>
            <div id='rightBox'>
                <div id='loginForm'>
                    <p id='h1'>Welcome back.</p>
                    <p id='h5' style={{ marginBottom: 50 }}>Don't have an account? <a href='/'>Order now</a></p>
                    <InputField
                        title='Email address'
                        icon='mail_outline'
                        placeholder='Email'
                        onChange={ev => setEmail(ev.target.value)}
                        error={error}
                        value={email}
                    />
                    <InputField
                        title='Password'
                        icon='lock'
                        placeholder='Password'
                        type='password'
                        onChange={ev => setPassword(ev.target.value)}
                        error={error}
                        value={password}
                    />
                    <p id='h5' style={{ color: colors.error, textTransform: 'capitalize', fontSize: 12, }}>{error}</p>
                    <CheckBox
                        title='Remember me'
                    />
                    <SubmitButton
                        title='Login'
                        active={email && password}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;