import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import axios from '../api/AxiosApi';
import { Row, Card } from 'reactstrap';

const ADD_NOTE_URL = '/notes';
// body must be at least 10 characters long and can have any letters, characters, punctuation, etc.
const BODY_REGEX = /^.{10,}$/;

const DATE_CREATED_REGEX = /^(?!\s*$).+/;




const AddNote = () => {

    const { id } = useParams();
    console.log(id);
    const bodyRef = useRef();
    const errRef = useRef();

    const [body, setBody] = useState('');
    const [validBody, setValidBody] = useState(false);
    const [bodyFocus, setBodyFocus] = useState(false);

    const [dateCreated, setDateCreated] = useState('');
    const [validDateCreated, setValidDateCreated] = useState(false);
    const [dateCreatedFocus, setDateCreatedFocus] = useState(false);

    const [error, setError] = useState('');

    useEffect(() => {
        bodyRef.current.focus();
    }, []);


    useEffect(() => {
        setValidBody(BODY_REGEX.test(body));
        setValidDateCreated(DATE_CREATED_REGEX.test(dateCreated));

    }, [body, dateCreated]);

    useEffect(() => {
        setError('');
    }, [body, dateCreated]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newNote = await axios.post(`${ADD_NOTE_URL}/patient/${id}`, {
                body,
                // automatically set dateCreated 
                dateCreated
            });
            console.log(newNote);
            window.location.href = `/patient/${id}`;

            setBody('');
            setDateCreated('');
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
        errRef.current.focus();
    };


    return (
        <>
            <Card>  
                <p ref={errRef} className={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="body">Body</label>
                        <input
                            type="text"
                            ref={bodyRef}
                            className='form-control'
                            id='body'
                            required
                            value={body}
                            aria-invalid={validBody ? 'false' : 'true'}
                            aria-describedby='bodynote'
                            onChange={(e) => setBody(e.target.value)}
                            onFocus={() => setBodyFocus('focus')}
                            onBlur={() => setBodyFocus('')}
                        />
                        <p id='bodynote' className={bodyFocus && body && !validBody ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} /> 
                            <FontAwesomeIcon icon={faTimes}  className={validBody || !body ? 'hide' : 'invalid'} />
                            4 to 10 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="dateCreated">Date Created</label>
                        <input
                            type="date"
                            className='form-control'
                            id='dateCreated'
                            // set date to current date
                            value={new Date().toISOString().slice(0, 10)}
                            aria-invalid={validDateCreated ? 'false' : 'true'}
                            aria-describedby='dateCreatednote'
                            onChange={(e) => setDateCreated(e.target.value)}
                            onFocus={() => setDateCreatedFocus(true)}
                            onBlur={() => setDateCreatedFocus(false)}
                        />
                        <p id='dateCreatednote' className={dateCreatedFocus && !validDateCreated ? 'instructions' : 'offscreen'}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must enter a valid date.
                        </p>
                    </div>
                    <button>Submit</button>
                </form>
            </Card>
        </>
    );
};

export default AddNote