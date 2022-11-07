import React from 'react';
import { Row, Col, Modal, ModalBody } from 'reactstrap';
import arrow from '../images/arrowup.svg'
import Scrollspy from 'react-scrollspy';

const PatientModal = ({
    isOpen, 
    toggle, 
    patCode,
    valuePatientCode,
    valueFirstName, 
    valueLastName,
    valueDob,
    valueSocial,
    valueGender,
    valueEthnicity,
    valueBloodType,
    valueEmail,
    valuePhone,
    valueAddress,
    valueCity,
    valueState,
    valueZip,
    valueContactFirstname,
    valueContactLastname,
    valueContactPhone,
    valueContactRelationship,
    valueAllergies,
    valueInsurance,
    valueConditions,
    valueMedications,
    onChangePatientCode,
    onChangeFirstName,
    onChangeLastName,
    onChangeDob,
    onChangeGender,
    onChangeSocial,
    onChangeEthnicity,
    onChangeBloodType,
    onChangeEmail,
    onChangePhone,
    onChangeAddress,
    onChangeCity,
    onChangeState,
    onChangeZip,
    onChangeContactFirstname,
    onChangeContactLastname,
    onChangeContactPhone,
    onChangeContactRelationship,
    onChangeAllergies,
    onChangeInsurance,
    onChangeConditions,
    onChangeMedications,
    onSubmit,
    onPatientClick
    }) => {


    return (
        <>
            <Modal isOpen={isOpen} toggle={toggle} size='lg' centered scrollable>
                <ModalBody >
                    <form  onSubmit={onSubmit}>
                        {/* <Row className='d-flex flex-row justify-content-between'> */}
                            <Col className='d-flex flex-row justify-content-between mb-2' id='top'>
                                <h3 className='align-self-center'>MRN: {patCode} </h3>
                                <button 
                                    type='button' 
                                    className='mt-0 mr-0 p-2 cancel-btn ' 
                                    onClick={onPatientClick}
                                >
                                    Cancel
                                </button>
                            </Col>
                            <Col className='d-flex justify-content-around'>
                                <Scrollspy
                                    items={ ['up-pd', 'up-ci', 'up-ec', 'up-md'] }
                                    currentClassName="active"
                                >
                                    <ul className='list-unstyled d-flex justify-content-between pl-0 m-0'>
                                        <li className='px-2'><a className='text-decoration-none pt-link' href="#up-pd">General</a></li>
                                        <li className='px-2'><a className='text-decoration-none pt-link' href="#up-ci">Contact</a></li>
                                        <li className='px-2'><a className='text-decoration-none pt-link' href="#up-ec">Emergency </a></li>
                                        <li className='px-2'><a className='text-decoration-none pt-link' href="#up-md">Medical</a></li>
                                    </ul>
                                </Scrollspy>
                            </Col>
                        {/* </Row> */}
                        <Row id='up-pd' className='p-2'>
                            <Col xs={12} md={6} className='form-group p-2'>
                                <label htmlFor="patientCode">Patient Code</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='patientCode'
                                    value={valuePatientCode}
                                    readOnly
                                    
                                />
                            </Col>
                            <Col xs={12} md={6} className='form-group p-2'>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='firstName'
                                    value={valueFirstName}
                                    onChange={onChangeFirstName}
                                />
                            </Col>
                            <Col xs={12} lg={6} className='form-group p-2'>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='lastName'
                                    value={valueLastName}
                                    onChange={onChangeLastName}
                                />
                            </Col>
                            <Col xs={12} lg={6} className='form-group p-2'>
                                <label htmlFor="dob">Date of Birth</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='dob'
                                    value={valueDob}
                                    onChange={onChangeDob}
                                />
                            </Col>
                            <Col xs={12} lg={6} className='form-group p-2'>
                                <label htmlFor="gender">Gender</label>
                                <select
                                    name='gender'
                                    id='gender'
                                    className='form-select'
                                    onChange={onChangeGender}
                                >
                                    <option value="">Select</option>
                                    <option value='Male'>Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-Binary">Non Binary</option>
                                    <option value="Prefer not to answer">Prefer not to answer</option>
                                    <option value="Not listed here">Not listed here</option>
                                </select>
                            </Col>

                            <Col  xs={12} lg={6} className='form-group p-2'>
                                <label htmlFor="social">SSN</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='social'
                                    value={valueSocial}
                                    onChange={onChangeSocial}
                                />
                            </Col>
                            <Col xs={12} md={6} className="form-group p-2">
                                <label htmlFor="bloodType">Blood Type</label>
                                <select
                                    name='bloodType'
                                    id='bloodType'
                                    className='form-select'
                                    onChange={onChangeBloodType}
                                >
                                    <option value="">Select</option>
                                    <option value='A+'>A+</option>
                                    <option value='A-'>A-</option>
                                    <option value='B+'>B+</option>
                                    <option value='B-'>B-</option>
                                    <option value='O+'>O+</option>
                                    <option value='O-'>O-</option>
                                    <option value='AB+'>AB+</option>
                                    <option value='AB-'>AB-</option>
                                </select>
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="ethnicity">Race/Ethnicity</label>
                                <select
                                        name='ethnicity'
                                        id='ethnicity'
                                        className='form-select'
                                        onChange={onChangeEthnicity}
                                >
                                    <option value="">Select</option>
                                    <option value='Asian or Pacific Islander'>Asian or Pacific Islander</option>
                                    <option value='Black of African American'>Black of African American</option>
                                    <option value='Hispanic or Latino'>Hispanic or Latino</option>
                                    <option value='Native American or Alaskan Native'>Native American or Alaskan Native</option>
                                    <option value='White or Caucasian'>White or Caucasian</option>
                                    <option value='Multiracial or Biracial'>Multiracial or Biracial</option>
                                    <option value='A race/ethnicity not listed here'>A race/ethnicity not listed here</option>
                                </select>
                            </Col>
                        </Row>

                        <hr className='text-primary px-3 '/>

                        <Row id='up-ci' className='p-2'>
                            <h5>Contact</h5>
                            <Col md={6} className='form-group p-2'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='email'
                                    value={valueEmail}
                                    onChange={onChangeEmail}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='phone'
                                    value={valuePhone}
                                    onChange={onChangePhone}
                                />
                            </Col>
                            <Col xs={12} className='form-group p-2'>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='address'
                                    value={valueAddress}
                                    onChange={onChangeAddress}
                                />
                            </Col>
                            <Col md={6} className='form-group p-2'>
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='city'
                                    value={valueCity}
                                    onChange={onChangeCity}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='state'
                                    value={valueState}
                                    onChange={onChangeState}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="zip">Zip</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='zip'
                                    value={valueZip}
                                    onChange={onChangeZip}
                                />  
                            </Col>
                        </Row>

                        <hr className='text-primary px-3 '/>

                        <Row id='up-ec' className='p-2'>
                            <h5>Emergency Contact</h5>
                            <Col md={6} className='form-group p-2'>
                                <label htmlFor="contactFirstname">First Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='contactFirstname'
                                    value={valueContactFirstname}
                                    onChange={onChangeContactFirstname}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="contactLastName">Last Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='contactLastName'
                                    value={valueContactLastname}
                                    onChange={onChangeContactLastname}
                                />
                            </Col>
                            <Col md={6} className='form-group p-2'>
                                <label htmlFor="contactPhone">Phone</label>
                                <input  
                                    type="text"
                                    className='form-control'
                                    id='contactPhone'
                                    value={valueContactPhone}
                                    onChange={onChangeContactPhone}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor='contactRelationship'>Relationship</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='contactRelationship'
                                    value={valueContactRelationship}
                                    onChange={onChangeContactRelationship}
                                />
                            </Col>
                        </Row>

                        <hr className='text-primary px-3'/>

                        <Row id='up-md' className='p-2'>
                            <h5>Medical Info</h5>
                            <Col className='form-group p-2'>
                                <label htmlFor="allergies">Allergies</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='allergies'
                                    value={valueAllergies}
                                    onChange={onChangeAllergies}
                                />  
                            </Col>
                            <Col xs={12} className='form-group p-2'>
                                <label htmlFor="insurance">Insurance</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='insurance'
                                    value={valueInsurance}  
                                    onChange={onChangeInsurance}
                                />
                            </Col>
                            <Col className='form-group p-2'>
                                <label htmlFor="conditions">Conditions</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='conditions'
                                    value={valueConditions}
                                    onChange={onChangeConditions}
                                />
                            </Col>
                            <Col xs={12} className='form-group p-2'>
                                <label htmlFor="medications">Medications</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id='medications'
                                    value={valueMedications}
                                    onChange={onChangeMedications}
                                />
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-end'>
                
                            <button 
                                type='submit' 
                                className='mt-3 mr-0 p-2 form-btn'
                            >
                                Update
                            </button>
                        </div>
                        <button type='button' className='scroll-btn' >
                            <a href='#top' alt='scroll-link' className='scroll-link'> 
                                <img src={arrow} alt='arrow'className='arrow'/>
                            </a>
                        </button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PatientModal