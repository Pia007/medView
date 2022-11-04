import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import axios from '../api/AxiosApi';
import { Modal, ModalBody } from 'reactstrap';

const ADD_NOTE_URL = '/notes';

// body must be at least 10 characters long and can have any letters, characters, punctuation, etc.
const BODY_REGEX = /^.{10,}$/;

const DATE_CREATED_REGEX = /^(?!\s*$).+/;


const NoteModal = ({
    isOpen,
    toggleNote,
    onSubmitNote,
    valueBody,
    valueDateCreated,
    onChangeBody,
    onChangeDateCreated

}) => {

    // const navigate = useNavigate();

    // const { id } = useParams();
    // console.log(id);
    // const bodyRef = useRef();
    // const errRef = useRef();

    // const [body, setBody] = useState('');
    // const [validBody, setValidBody] = useState(false);
    // const [bodyFocus, setBodyFocus] = useState(false);

    // const [dateCreated, setDateCreated] = useState('');
    // const [validDateCreated, setValidDateCreated] = useState(false);
    // const [dateCreatedFocus, setDateCreatedFocus] = useState(false);

    // const [error, setError] = useState('');

    // useEffect(() => {
    //     bodyRef.current.focus();
    // }, []);


    // useEffect(() => {
    //     setValidBody(BODY_REGEX.test(body));
    //     setValidDateCreated(DATE_CREATED_REGEX.test(dateCreated));

    // }, [body, dateCreated]);

    // useEffect(() => {
    //     setError('');
    // }, [body, dateCreated]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const newNote = await axios.post(`${ADD_NOTE_URL}/patient/${id}`, {
    //             body,
    //             //
    //             dateCreated: moment(dateCreated).format('YYYY-MM-DD')
    //         });
    //         console.log(newNote);
    //         console.log(JSON.stringify(newNote.data));

    //         navigate(`/patient/${id}`);

    //         setBody('');
    //         setDateCreated('');
    //     } catch (error) {
    //         console.log(error);
    //         setError(error.response.data);
    //     }
    //     errRef.current.focus();
    // };


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
                        <div className='d-flex justify-content-around'>
                            <button type='submit' className='mt-3 mr-0 p-2 form-btn'>Submit</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default NoteModal;