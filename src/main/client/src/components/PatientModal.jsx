import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

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
    onChangeAllergies,
    onChangeInsurance,
    onChangeConditions,
    onChangeMedications,
    onSubmit,
    closeModal
    }) => {

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggle} size='lg' centered scrollable>
                <ModalBody>
                    <form action="" onSubmit={onSubmit}>
                        <h3 className='px-2'>MRN: {patCode} </h3>
                        <div className='form-group p-2'>
                            <label htmlFor="patientCode">Patient Code</label>
                            <input
                                type="text"
                                className='form-control'
                                id='patientCode'
                                value={valuePatientCode}
                                // set to read only
                                readOnly
                                
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className='form-control'
                                id='firstName'
                                value={valueFirstName}
                                onChange={onChangeFirstName}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className='form-control'
                                id='lastName'
                                value={valueLastName}
                                onChange={onChangeLastName}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type="text"
                                className='form-control'
                                id='dob'
                                value={valueDob}
                                onChange={onChangeDob}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="gender">Gender</label>
                            <select
                                name='gender'
                                id='gender'
                                className='form-select'
                                onChange={onChangeGender}
                            >
                                <option value='Male'>Male</option>
                                <option value="Female">Female</option>
                                <option value="Non-Binary">Non Binary</option>
                                <option value="Prefer not to answer">Prefer not to answer</option>
                                <option value="Not listed here">Not listed here</option>
                            </select>
                        </div>

                        <div className='form-group p-2'>
                            <label htmlFor="social">SSN</label>
                            <input
                                type="text"
                                className='form-control'
                                id='social'
                                value={valueSocial}
                                onChange={onChangeSocial}
                            />
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="bloodType">Blood Type</label>
                            <select
                                name='bloodType'
                                id='bloodType'
                                className='form-select'
                                onChange={onChangeBloodType}
                                >
                                    <option value='A+'>A+</option>
                                    <option value='A-'>A-</option>
                                    <option value='B+'>B+</option>
                                    <option value='B-'>B-</option>
                                    <option value='O+'>O+</option>
                                    <option value='O-'>O-</option>
                                    <option value='AB+'>AB+</option>
                                    <option value='AB-'>AB-</option>
                            </select>
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="ethnicity">Race/Ethnicity</label>
                            <select
                                    name='ethnicity'
                                    id='ethnicity'
                                    className='form-select'
                                    onChange={onChangeEthnicity}
                                    // onFocus={() => setEthnicity(true)}
                                    // onBlur={() => setEthnicity(false)}
                                >
                                    <option value='Asian or Pacific Islander'>Asian or Pacific Islander</option>
                                    <option value='Black of African American'>Black of African American</option>
                                    <option value='Hispanic or Latino'>Hispanic or Latino</option>
                                    <option value='Native American or Alaskan Native'>Native American or Alaskan Native</option>
                                    <option value='White or Caucasian'>White or Caucasian</option>
                                    <option value='Multiracial or Biracial'>Multiracial or Biracial</option>
                                    <option value='A race/ethnicity not listed here'>A race/ethnicity not listed here</option>
                                </select>
                            {/* <input
                                type="text"
                                className='form-control'
                                id='ethnicity'
                                value={valueEthnicity}
                                onChange={onChangeEthnicity}
                            /> */}
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className='form-control'
                                id='email'
                                value={valueEmail}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className='form-control'
                                id='phone'
                                value={valuePhone}
                                onChange={onChangePhone}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className='form-control'
                                id='address'
                                value={valueAddress}
                                onChange={onChangeAddress}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className='form-control'
                                id='city'
                                value={valueCity}
                                onChange={onChangeCity}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className='form-control'
                                id='state'
                                value={valueState}
                                onChange={onChangeState}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="zip">Zip</label>
                            <input
                                type="text"
                                className='form-control'
                                id='zip'
                                value={valueZip}
                                onChange={onChangeZip}
                            />  
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="allergies">Allergies</label>
                            <input
                                type="text"
                                className='form-control'
                                id='allergies'
                                value={valueAllergies}
                                onChange={onChangeAllergies}
                            />  
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="insurance">Insurance</label>
                            <input
                                type="text"
                                className='form-control'
                                id='insurance'
                                value={valueInsurance}  
                                onChange={onChangeInsurance}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="conditions">Conditions</label>
                            <input
                                type="text"
                                className='form-control'
                                id='conditions'
                                value={valueConditions}
                                onChange={onChangeConditions}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="medications">Medications</label>
                            <input
                                type="text"
                                className='form-control'
                                id='medications'
                                value={valueMedications}
                                onChange={onChangeMedications}
                            />
                        </div>
                        <div className='d-flex justify-content-end px-2'>
                            <button type='submit' className='p-2 form-btn'>Update</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PatientModal