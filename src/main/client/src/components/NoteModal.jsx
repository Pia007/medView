import React from 'react';
import { Modal, ModalBody} from 'reactstrap';

const NoteModal = ({
    onSubmit,
    isOpen,
    toggle,
    valueBody,
    valueDateCreated,
    onChangeBody,
    onFocusBody,
    onBlurBody,
    onChangeDateCreated,

}) => {
    return (
        <>
            <Modal isOpen={isOpen} toggle={toggle} centered>
                <ModalBody>
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default NoteModal