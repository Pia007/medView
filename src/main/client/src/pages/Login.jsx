import React from 'react'
import LoginForm from '../components/LoginForm';

import { Row, Col, Card } from 'reactstrap';

const Login = () => {
    return (
        <div className='container'>
            <Row>           
            <LoginForm />
            </Row>
        </div>
    )
}

export default Login