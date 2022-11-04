import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import { faUserPen, faUser, faTimes, faInfoCircle, faFileMedical, faFilePrescription, faPenToSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const RenderProvider = ({provider, onClick}) => {

    // upercase first letter of provider specialty
    const specialty = provider.specialty.charAt(0).toUpperCase() + provider.specialty.slice(1);
    const firstName = provider.firstName.charAt(0).toUpperCase() + provider.firstName.slice(1);
    const lastName = provider.lastName.charAt(0).toUpperCase() + provider.lastName.slice(1);
    const suffix = provider.suffix.toUpperCase();

    return (
        <>
            <Row className='text-center p-3 mt-2'>
                <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col>
                <Col>
                    <h2 className='mt-2'> {firstName} {lastName}, {suffix} </h2>
                    <h3>{specialty}</h3>
                </Col>

            </Row>
        </>
    )
}


/* render patient */
export const RenderPatient = ({singlePatient, handleClick}) => {


    
    return (
        <>
            <Card className=' p-3'>
                <Row>
                    <Col xm={4} className='text-left'>
                        <h4>{singlePatient.lastName}, {singlePatient.firstName} </h4>
                        <p className='mb-1 detail'><strong>DOB:</strong> {new Date(singlePatient.dob).toLocaleDateString()} - {singlePatient.gender} - {singlePatient.age}yrs</p>
                        <p className='mb-1 detail'>{singlePatient.address}, {singlePatient.city}, {singlePatient.state} {singlePatient.zip}</p>
                        <p className='mb-1 detail'>{singlePatient.phone}</p>
                         <p className='mb-1 detail'>{singlePatient.email}</p>
                        {/* <Col>
                            <p className='mb-1 detail'>ICE: </p>
                        </Col> */}
                    </Col>
                    <Col md={4} className='d-flex flex-column justify-content-around'>
                        <Col xs={4} className='m-auto text-center' >
                            <button className='p-1 text-center pat-icon-button ' onClick={handleClick} >
                                <FontAwesomeIcon icon={faUser} className='icon pat-icon'/>
                            </button>
                            
                        </Col>
                        <Col className='text-center mt-2'>
                            <p className='pat-text detail fw-bold'>MRN: <span className='fw-normal'>{singlePatient.patientCode}</span></p>
                        </Col>
                    </Col>
                    <Col>
                        {/* display only if there patient alleries equal none or is empty otherwise display nothing*/}
                        
                        {singlePatient.allergies !== 'none' || singlePatient.allergies !== '' ?
                            <Col className='d-flex flex-column justify-content-end'>
                                <FontAwesomeIcon icon={faTriangleExclamation} className='icon alert-icon align-self-end'/>
                                <p className='align-self-end alert-detail detail d'>Allergies</p>
                            </Col>
                            : null
                        }


                    </Col>
                {/* <Col> */}
                    {/* <button className='p-1 text-center provider-icon-button' onClick={handleClick}>
                        <FontAwesomeIcon icon={faPenToSquare} className='icon pat-icon'/>
                    </button> */}
                    {/* <h2>{singlePatient.lastName}, {singlePatient.firstName} </h2> */}
                    {/* display age in Month day year */}
                    {/* <p className='mb-1 detail'>DOB: {new Date(singlePatient.dob).toLocaleDateString()} - {singlePatient.age}yrs</p>

                    <p className='mb-1 detail'>{singlePatient.address}, {singlePatient.city}, {singlePatient.state} {singlePatient.zip}</p>
                    
                    <p className='mb-1 detail'>{singlePatient.email}</p>
                    <p className='mb-1 detail'>{singlePatient.phone}</p> */}
                {/* </Col> */}
            </Row>
            </Card>
        </>
    ) 
}


/* render patient notes */
export const RenderNotes = ({patientNote}) => {
    return (
        <>
            <Row className='text-center p-3'>
                <Col>
                    <p>{patientNote.body}</p>
                </Col>
                <button>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button>
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </Row>

        </>
    )
}

export const RenderData = ( {data, title, dataValue, onClick, src, alt} ) => {
    if ({data}) {
        return (
            <Card>
                {/* make the first letter  of each word uppercase */}
                <Col className='d-flex justify-content-between'>
                    <p className='mb-1'>
                        <strong>{title}: </strong> 
                        {dataValue}
                    </p>
                    <button className='edit-conditions-btn'
                        onClick={onClick}
                    >
                        <img src={src} alt={alt} className="edit-icon" />
                    </button>
                </Col>
            </Card>
        )
    }
}