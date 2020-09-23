import React, { useState } from 'react';
import Logo from './logo-r';
import './Login.scss';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, remember }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => setUser(res.user));
    };

    return (
        <div className='page'>
            <div className='panel'>
                <Logo />
                <h2> Welcome to Green.</h2>
                <p>Please enter your email below</p>

                <div className='form-control'>
                    <label htmlFor='email'>Email Address</label>
                    <div className='input-container'>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='input'
                        />
                    </div>
                    <div className='checkbox-container'>
                        <input
                            type='checkbox'
                            checked={remember}
                            value={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Remember this device
                    </div>
                    <div className='form-control'>
                        <button onClick={onSubmit}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
