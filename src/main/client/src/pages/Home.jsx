import React from 'react'
import Info from '../components/Info'
import { Row } from 'reactstrap'

const Home = () => {
    return (
        <Row className='d-flex flex-row justify-content-around home' >
            <h1 className='mb-5 text-center title '>Welcome to MedView</h1>
            <Info />
        </Row>
    )
}

export default Home