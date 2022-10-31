import React from 'react';
import { Modal, ModalBody} from 'reactstrap';
import AddNoteForm from './AddNoteModal';

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
                    <AddNoteForm 
                        onSubmit={onSubmit}
                        valueBody={valueBody}
                        valueDateCreated={valueDateCreated}
                        onChangeBody={onChangeBody}
                        onFocusBody={onFocusBody}
                        onBlurBody={onBlurBody}
                        onChangeDateCreated={onChangeDateCreated}

                    />
                </ModalBody>
            </Modal>
        </>
    )
}

export default NoteModal