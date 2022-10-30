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

// ,  onClickInfo, onClickMeds, onClickEdit

export const RenderPatientList = ({ patient, onClick}) => {
    return (
        <>
            {/* <Table hover>
                <thead>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone Number
                        </th> 
                        <th>
                            Username
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead> */}
                {/* <tbody> */}
                    {/* <tr className='table-row' onClick={onClick}> */}
                    
                        <td>
                            {patient.firstName}
                        </td>
                        <td>
                            {patient.lastName}
                        </td>
                        <td>
                            {patient.age}
                        </td>
                        {/* <td>
                            {patient.email}
                        </td>
                        <td>
                            {patient.phone}
                        </td> */}
                        <td>
                            <button >
                                <FontAwesomeIcon icon={faFileMedical} />
                            </button>
                        </td>
                        <td>
                            <button >
                                <FontAwesomeIcon icon={faFilePrescription} />
                            </button>
                        </td>
                        <td>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                        </td>
                        <td>
                            {/* <button   to={`/patients/${patId}`}> */}
                             {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                            <button onClick={onClick}>
                                Info
                               
                            </button>
                        </td>
                    
                    {/* </tr>
                </tbody>
            </Table> */}
        </>
    )
}



/* render patient */
export const RenderPatient = ({singlePatient}) => {
    return (
        <>
            <Row className='text-center p-3'>
                {/* <Col xs={12}>
                    <button className='p-1 text-center provider-icon-button' onClick={onClick}>
                        <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                    </button>
                </Col> */}
                <Col>
                    <h2> {singlePatient.firstName} {singlePatient.lastName} </h2>
                    <h3>{singlePatient.age}</h3>
                    <h4>{singlePatient.address}, {singlePatient.city}, {singlePatient.state} {singlePatient.zip}</h4>
                </Col>

            </Row>
        </>
    )
}