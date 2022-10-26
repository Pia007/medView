import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';

const Main = () => {
    return (
        <div className='container-fluid'>
            <h1>Hello from my app</h1> 
            <RegistrationForm />
            <LoginForm />
            
        </div>
    )
}

export default Main
