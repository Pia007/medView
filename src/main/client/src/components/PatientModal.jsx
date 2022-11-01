import React from 'react';
import { Modal, ModalBody} from 'reactstrap';

const PatientModal = ({
    isOpen, 
    toggle, 
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
            <Modal isOpen={isOpen} toggle={toggle} centered>
                <ModalBody>
                    <form action="" onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className='form-control'
                                id='firstName'
                                value={valueFirstName}
                                onChange={onChangeFirstName}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className='form-control'
                                id='lastName'
                                value={valueLastName}
                                onChange={onChangeLastName}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type="text"
                                className='form-control'
                                id='dob'
                                value={valueDob}
                                onChange={onChangeDob}
                                // convert date from MM/DD/YYYY to YYYY-MM-DD
                                // value={valueDob.split('/').reverse().join('-')}

                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="gender">Gender</label>
                            <input
                                type="text"
                                className='form-control'
                                id='gender'
                                value={valueGender}
                                onChange={onChangeGender}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="social">Social Security Number</label>
                            <input
                                type="text"
                                className='form-control'
                                id='social'
                                value={valueSocial}
                                onChange={onChangeSocial}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bloodType">Blood Type</label>
                            <input
                                type="text"
                                className='form-control'
                                id='bloodType'
                                value={valueBloodType}
                                onChange={onChangeBloodType}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="ethnicity">Race/Ethnicity</label>
                            <input
                                type="text"
                                className='form-control'
                                id='ethnicity'
                                value={valueEthnicity}
                                onChange={onChangeEthnicity}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className='form-control'
                                id='email'
                                value={valueEmail}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className='form-control'
                                id='phone'
                                value={valuePhone}
                                onChange={onChangePhone}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className='form-control'
                                id='address'
                                value={valueAddress}
                                onChange={onChangeAddress}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className='form-control'
                                id='city'
                                value={valueCity}
                                onChange={onChangeCity}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className='form-control'
                                id='state'
                                value={valueState}
                                onChange={onChangeState}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="zip">Zip</label>
                            <input
                                type="text"
                                className='form-control'
                                id='zip'
                                value={valueZip}
                                onChange={onChangeZip}
                            />  
                        </div>
                        <div className='form-group'>
                            <label htmlFor="allergies">Allergies</label>
                            <input
                                type="text"
                                className='form-control'
                                id='allergies'
                                value={valueAllergies}
                                onChange={onChangeAllergies}
                            />  
                        </div>
                        <div className='form-group'>
                            <label htmlFor="insurance">Insurance</label>
                            <input
                                type="text"
                                className='form-control'
                                id='insurance'
                                value={valueInsurance}  
                                onChange={onChangeInsurance}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="conditions">Conditions</label>
                            <input
                                type="text"
                                className='form-control'
                                id='conditions'
                                value={valueConditions}
                                onChange={onChangeConditions}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="medications">Medications</label>
                            <input
                                type="text"
                                className='form-control'
                                id='medications'
                                value={valueMedications}
                                onChange={onChangeMedications}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Update</button>
                        <button type='cancel' className='btn btn-secondary' onClick={closeModal}>Cancel</button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default PatientModal