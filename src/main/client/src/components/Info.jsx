import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Card } from 'reactstrap'

const Info = () => {

    const navigate = useNavigate();

    return (
        <Row className='d-flex flex-column flex-md-row justify-content-around mx-auto intro-holder'>
            <Col md={6} className='flex-column-reverse'>
                <Card className='p-2 p-lg-3 p-xl-4 intro-card'>
                    <p className="intro-text m-0 ">
                        Provider friendly patient management system.
                    </p>
                </Card>
                <Card className='order-2 p-2 p-lg-3 p-xl-4 intro-card card-two '>
                    <p className="intro-text m-0 ">
                        Technical support 24hrs a day for every tier.
                    </p>
                </Card>
            </Col>
            <Col md={6} className=''>
                <Card className='p-2 p-lg-3 p-xl-4 intro-card card-blue'>
                    <p className="intro-text m-0">
                        We can customize a design to fit your needs.
                    </p>
                </Card>
                <Card 
                    className='order-1 p-2 p-lg-3 p-xl-4 intro-card card-two card-orange' 
                    onClick={() => {
                            navigate('/login')
                        }}
                >
                    <p className="intro-text m-0 intro-button">
                        Interested? Click here to try the demo version.
                    </p>
                </Card>
            </Col>
        </Row>
    )
}

export default Info