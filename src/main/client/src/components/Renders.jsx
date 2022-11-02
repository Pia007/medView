import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import { faUserPen, faTimes, faInfoCircle, faFileMedical, faFilePrescription, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const RenderProvider = ({provider, onClick}) => {

    // upercase first letter of provider specialty
    const specialty = provider.specialty.charAt(0).toUpperCase() + provider.specialty.slice(1);

    return (
        <>
            <Row className='text-center p-3 mt-2'>
                <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col>
                <Col>
                {/* convert first letter to upper case */}
                    <h2 className='mt-2'> {provider.firstName} {provider.lastName}, {provider.suffix} </h2>
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
            <Row className='text-center p-3'>
                {/* <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col> */}
                <Col>
                    <button className='p-1 text-center provider-icon-button' onClick={handleClick}>
                        <FontAwesomeIcon icon={faPenToSquare} className='icon pat-icon'/>
                    </button>
                    <h2>{singlePatient.firstName} {singlePatient.lastName} </h2>
                    {/* display age in Month day year */}
                    <p className='mb-1 detail'>DOB: {new Date(singlePatient.dob).toLocaleDateString()}</p>

                    <p className='mb-1 detail'>{singlePatient.address}, {singlePatient.city}, {singlePatient.state} {singlePatient.zip}</p>
                    
                    <p className='mb-1 detail'>{singlePatient.email}</p>
                    <p className='mb-1 detail'>{singlePatient.phone}</p>
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