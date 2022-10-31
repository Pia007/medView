import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import { faUserPen, faTimes, faInfoCircle, faFileMedical, faFilePrescription, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const RenderProvider = ({provider, onClick}) => {

    return (
        <>
            <Row className='text-center p-3'>
                <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col>
                <Col>
                    <h2> {provider.firstName} {provider.lastName} </h2>
                    <h3>{provider.specialty}</h3>
                </Col>

            </Row>
        </>
    )
}


/* render patient */
export const RenderPatient = ({singlePatient, handleClick}) => {
    return (
        <>
            <Row className='text-center p-3'>
                {/* <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col> */}
                <Col>
                    <button className='p-1 text-center provider-icon-button' onClick={handleClick}>
                        <FontAwesomeIcon icon={faPenToSquare} className='pat-edit-icon'/>
                    </button>
                    <h2>{singlePatient.firstName} {singlePatient.lastName} </h2>
                    {/* display age in Month day year */}
                    <h3>DOB: {new Date(singlePatient.dob).toLocaleDateString()}</h3>

                    <p className='mb-1'>{singlePatient.address}, {singlePatient.city}, {singlePatient.state} {singlePatient.zip}</p>
                    
                    <p className='mb-1'>{singlePatient.email}</p>
                    <p className='mb-1'>{singlePatient.phone}</p>
                    {/* <FontAwesomeIcon icon={faPenToSquare} className='pat-edit-icon'/> */}
                </Col>

            </Row>
        </>
    ) 
}


/* render patient notes */
export const RenderNotes = ({patientNote}) => {
    return (
        <>
            <Row className='text-center p-3'>
                <Col>
                    {/* <p>{patientNote.dateCreated}</p> */}
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