import React from 'react'
import Info from '../components/Info'
import { Row } from 'reactstrap'
import { Zoom } from 'react-reveal'

const Home = () => {
    return (
        <Row className='d-flex flex-row justify-content-around home' >
            <Zoom >
                <h1 className='mb-5 text-center title '>Welcome to MedView</h1>
            </Zoom>
            <Info />
        </Row>
    )
}

export default Home