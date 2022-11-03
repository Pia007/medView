import React from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';

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
                    <h2 className='px-2'>Provider Update</h2> 
                    <form action="" onSubmit={onSubmit}>
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
                            <label htmlFor="specialty">Specialty</label>
                            <input 
                                type="text" 
                                className='form-control'
                                id='specialty' 
                                value={valueSpecialty} 
                                onChange={onChangeSpecialty}
                            />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="suffix">Suffix</label>
                            <input
                                type="text"
                                className='form-control'
                                id='suffix'
                                value={valueSuffix}
                                onChange={onChangeSuffix}
                            />
                        </div>
                        <div className='d-flex justify-content-end p-2'>
                            <Button className='form-btn' type='submit'>Submit</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ProviderModal;