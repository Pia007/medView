import React from 'react';
import { Modal, ModalBody} from 'reactstrap';

const ProviderModal = ({
    onSubmit,
    isOpen, 
    toggle, 
    valueOne, 
    valueTwo, 
    valueThree, 
    onChangeOne, 
    onChangeTwo, 
    onChangeThree}) => {

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
                                value={valueOne} 
                                onChange={onChangeOne}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='lastName' 
                                value={valueTwo}
                                onChange={onChangeTwo}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="specialty">Specialty</label>
                            <input 
                                type="text" 
                                className='form-control'
                                id='specialty' 
                                value={valueThree} 
                                onChange={onChangeThree}
                            />
                        </div>
                        <button type='submit'>Update</button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ProviderModal;