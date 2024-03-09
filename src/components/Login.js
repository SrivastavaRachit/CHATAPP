import React from 'react'
import './myStyles.css'

import logo from '../icons/live-chat_512px.png';
import { Button, TextField } from '@mui/material';
function Login() {
    return (
        <div className='login-container'>
            <div className='image-container'>
                <img src={logo} alt='Logo' className='welcome-logo' />
            </div>
            <div className='login-box'>
                <p className='login-text'>Login to your Account</p>
                <TextField id="standard-basic" label="Enter User Name" variant="outlined" color='secondary'/>

                <TextField id='outlined-password-input' label='Password' type='password' autoComplete='current-password' color='secondary'/>
                <Button variant="outlined" color='secondary'>Login</Button>
            </div>
        </div>
    )
}

export default Login;