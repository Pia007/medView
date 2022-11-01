import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ProviderModal = ({
    onSubmit,
    isOpen, 
    toggle, 
    valueFirstName, 
    valueLastName, 
    valueSpecialty, 
    valueSuffix,
    onChangeFirstName, 
    onChangeLastName, 
    onChangeSpecialty,
    onChangeSuffix,
    closeModal}) => {

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
                            <label htmlFor="specialty">Specialty</label>
                            <input 
                                type="text" 
                                className='form-control'
                                id='specialty' 
                                value={valueSpecialty} 
                                onChange={onChangeSpecialty}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="suffix">Suffix</label>
                            <input
                                type="text"
                                className='form-control'
                                id='suffix'
                                value={valueSuffix}
                                onChange={onChangeSuffix}
                            />
                        </div>
                        <button type='submit'>Update</button>
                        <button type="button" className="btn-close" onClick={closeModal}>Cancel</button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ProviderModal;