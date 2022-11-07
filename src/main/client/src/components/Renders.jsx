import React from 'react';
import {Card, Col, Row} from "reactstrap";
import { faUserPen, faUser, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bounce } from 'react-reveal';

export const RenderProvider = ({provider, onClick}) => {

    return (
        <>
            <Col xs={12} sm={10} className='m-auto text-center'>
                <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' alt='provider-edit-button'/>
                    </button>
                </Col>
                <Col className='text-capitalize'>
                    <h2 className='mt-2'> 
                        {provider.firstName} {''} 
                        {provider.lastName}, {''}
                        <span className='fw-bold text-two text-uppercase'>
                            {provider.suffix} 
                        </span>
                    </h2>
                    <h3 >{provider.specialty}</h3>
                </Col>
            </Col>
        </>
    )
}


/* render patient */
export const RenderPatient = ({singlePatient, handleClick}) => {

    // regex with only spaces or only commas
    const regex = /^[\s,]+$/;

    // contains only letters, commas, and spaces
    const regex2 = /^[a-zA-Z, ]*$/;   

    return (
        <>
            <Card className='p-3 my-5'>
                <Row className='d-flex flex-column flex-lg-row text-capitalize'>
                    <Col xm={4} className='order-2 order-lg-1 d-flex flex-column align-items-center align-items-lg-start my-2 my-lg-0'>
                        <h3 className='pat-text'>{singlePatient.lastName}, {''}
                            {singlePatient.firstName} 
                        </h3>
                        <p className='mb-0 detail'>
                            <strong>
                                DOB:
                            </strong> {' '}
                            {new Date(singlePatient.dob).toLocaleDateString()} - {''}
                            <span className='text-lowercase text-two'>
                                {singlePatient.age}yrs
                            </span>
                        </p>
                        <p className='mb-0 detail'><strong>Gender:</strong> {singlePatient.gender} </p>
                        <p className='mb-0 detail'><strong>Blood Type:</strong><span> {singlePatient.bloodType} </span></p>
                        <p className='mb-0 detail text-center text-lg-start'>
                            {singlePatient.address} {''}
                            {singlePatient.city} {''}
                            {singlePatient.state} {''}
                            {singlePatient.zip}
                        </p>
                        <p className='mb-0 detail'>{singlePatient.phone}</p>
                        <p className='mb-0 detail text-lowercase'>{singlePatient.email}</p>
                        
                    </Col>
                    <Col lg={4} className='order-1 order-lg-2 d-flex flex-column justify-content-around my-2 my-lg-0'>
                        <button className='p-1 m-auto pat-icon-button ' onClick={handleClick} >
                            <FontAwesomeIcon icon={faUser} className='icon pat-icon' alt='patient edit button'/>
                        </button>
                    
                        <p className='m-auto my-2 my-md-0 pat-text detail fw-bold'>
                            MRN: <span className='fw-normal text text-lowercase' >
                                {singlePatient.patientCode}
                            </span>
                        </p>
                    </Col>
                    <Col className='order-3 d-flex flex-column justify-content-end my-2 my-lg-1'>

                        {
                            singlePatient.allergies && (
                                !regex.test(singlePatient.allergies) && 
                                regex2.test(singlePatient.allergies) &&
                                singlePatient.allergies !== 'none' && 
                                singlePatient.allergies !== 'None' && 
                                singlePatient.allergies !== 'NONE' && 
                                singlePatient.allergies !== 'na' && 
                                singlePatient.allergies !== 'NA' && 
                                singlePatient.allergies !== 'Na')
                            ?   
                            (
                                <Col className='d-flex flex-column justify-content-end align-items-center align-items-lg-end'>
                                    <Bounce delay={750} duration={3000} forever={false}>
                                        <FontAwesomeIcon icon={faTriangleExclamation} className='icon alert-icon' alt='alert allergies'/>
                                        <p className=' alert-detail detail d'>Allergies</p>
                                    </Bounce>
                                </Col>
                            ) 
                            : null
                        }
                        <Col className='d-flex flex-column justify-content-end align-items-center align-items-lg-end mt-lg-1'>
                            <p className='detail '>
                                <strong>Insurance: </strong> <span className='text-two'>{singlePatient.insurance} </span>
                            </p>
                            <p className='detail '>
                                <strong>Emergency Contact: </strong> <span className='text-two'>{singlePatient.contactFirstname} </span>
                                <span className='text-two'>{singlePatient.contactLastname}</span>
                            </p>
                            <p className='detail '>
                                <strong>Relationship:</strong> <span className='text-two'>{singlePatient.contactRelationship}</span>
                            </p>
                            <p className='detail '>
                                <span className='text-two'>{singlePatient.contactPhone}</span>
                            </p>
                        </Col>
                    </Col>
                </Row>
            </Card>
        </>
    ) 
}


