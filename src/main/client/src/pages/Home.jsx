import React from 'react'
import { Row } from 'reactstrap'

const Home = () => {
    return (
        <Row className='container' style={{overflowX: 'hidden', width: '95vw'}}>
            <div className='px-2 px-md-2'>
                <h1 className="home">HOME</h1>
            </div>
        </Row>
    )
}

export default Home