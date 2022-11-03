import React from 'react'
import LoginForm from '../components/LoginForm';

import { Row, Col, Card } from 'reactstrap';

const Login = () => {
    return (
            <Row className='view'>           
                <LoginForm />
            </Row>
    )
}

export default Login