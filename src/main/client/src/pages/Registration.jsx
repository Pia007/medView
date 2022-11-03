import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Row, Col, Card } from 'reactstrap';

const Registrations = () => {
    return (
        <Row className='view'>
            <RegistrationForm />
        </Row>
    )
}

export default Registrations