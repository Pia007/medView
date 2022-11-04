import React from 'react';
import { Modal, ModalBody } from 'reactstrap';


const NoteModal = ({
    isOpen,
    toggleNote,
    onSubmitNote,
    valueBody,
    valueDateCreated,
    onChangeBody,
    onChangeDateCreated,
    onButtonClick

}) => {

    
    return (
        <>
            <Modal isOpen={isOpen} toggle={toggleNote} centered>
                <ModalBody>
                    <h2 className='fw-bold text-center detail'>Add a note</h2>
                    <form action="" onSubmit={onSubmitNote}>
                        <div className='form-group my-2'>
                            <label htmlFor="body">Body</label>
                            <textarea
                                type="text"
                                rows={5}
                                className='form-control'
                                id='body'
                                required
                                value={valueBody}
                                onChange={onChangeBody}
                            />
                        </div>
                        <div className='form-group my-2'>
                            <label htmlFor="dateCreated">Date Created</label>
                            <input
                                type="date"
                                className='form-control'
                                id='dateCreated'
                                // set date to current date
                                // value={dateCreated.split('/').reverse().join('-')}
                                value={valueDateCreated}
                                
                                onChange={onChangeDateCreated}
                            />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button type='submit' className='mt-3 mr-0 p-2 form-btn'>Submit</button>
                            <button type='button' className='mt-3 mr-0 p-2 cancel-btn' onClick={onButtonClick}>Cancel</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default NoteModal;