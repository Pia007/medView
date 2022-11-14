/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import axios from '../api/AxiosApi';
import { useNavigate, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';
import { Fade } from 'react-reveal';


const REGISTER_URL = '/providers/register';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,9}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/;
const FIRSTNAME_REGEX = /^[A-z- ]{2,}$/;
const LASTNAME_REGEX = /^[A-z- ]{2,}$/;
const SPECIALTY_REGEX = /^[A-z ,.'-]{8,}$/;
const SUFFIX_REGEX = /^[A-z]{2,}$/;


const RegistrationForm = () => {
    
    const usernameRef = useRef();

    const errorRef = useRef();

    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [passwordMatchFocus, setPasswordMatchFocus] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [specialty, setSpecialty] = useState('')
    const [validSpecialty, setValidSpecialty] = useState(false);
    const [specialtyFocus, setSpecialtyFocus] = useState(false);

    const [suffix, setSuffix] = useState('');
    const [validSuffix, setValidSuffix] = useState(false);
    const [suffixFocus, setSuffixFocus] = useState(false);

    const [success, setSuccess] = useState(false);
    const [err, setErr] = useState('');

    
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USERNAME_REGEX.test(username);
        setValidUsername(result);
    }, [username]);

    
    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(PASSWORD_REGEX.test(password)); 
        const match = password === matchPassword;
        setValidMatch(match)
        setValidPassword(result);
    }, [password, matchPassword]);

    
    useEffect(() => {
        const result = FIRSTNAME_REGEX.test(firstName);
        setValidFirstName(result);
    }, [firstName]);

    
    useEffect(() => {
        const result = LASTNAME_REGEX.test(lastName);
        setValidLastName(result);
    }, [lastName]);

    
    useEffect(() => {
        const result = SPECIALTY_REGEX.test(specialty);
        setValidSpecialty(result);
    }, [specialty]);

    
    useEffect(() => {
        const result = SUFFIX_REGEX.test(suffix);
        setValidSuffix(result);
    }, [suffix]);

    
    useEffect(() => {
        setErr('');
    }, [username, password, firstName, lastName, specialty, suffix]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(username, password);
        
        axios.post(REGISTER_URL, 
            {
                username,
                password,
                firstName,
                lastName,
                specialty,
                suffix
            }
        )
        .then((response) => {
        
            console.log("Status: ", response.status)
            console.log("Message: ", response.message)
            console.log("Data: ", response.data)
            console.log(JSON.stringify(response.data));

            if (response.status === 200 && response.data[0] === 'Username already exists') {
                setErr(response.data[0]);
                setSuccess(false);
                console.log('SORRY, USERNAME ALREADY EXISTS');
            } else {
                setUsername('');
                setPassword('');
                setMatchPassword('');
                setFirstName('');
                setLastName('');
                setSpecialty('');
                setSuffix('');
                setSuccess(true);

                navigate('/login');
            }
        })
    }

    return (
        <>
            <section className='row m-auto p-3 justify-content-around m-5'>
                

                <Card className='col-12 col-md-10 col-lg-8  p-2 login-card mt-2 hv-center align-self-center'>
                    <Col className='d-flex flex-column flex-sm-row justify-content-between'>
                        <h1 className='text-left p-2 mb-0 form-title'>Sign up</h1>
                        <Fade delay={1000}>
                            <span className='text-left align-self-sm-center p-2'>Demo application: Do not use sensitive information</span>
                        </Fade>
                    </Col>
                    
                    <h2 className='text-left p-2 mb-0 form-st'>
                        Already have an account? <Link to='/login' className='text-decoration-none form-link'> Sign in</Link> here.
                    </h2>
                    
                    <form onSubmit={handleSubmit} className='py-2 px-3' style={{border: ''}}>
                        <span ref={errorRef} className={err ? 'error' : 'offscreen'} aria-live='assertive'>
                            <FontAwesomeIcon icon={faInfoCircle} /> {err}
                        </span>
                        <Row className=''>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='username' className=''>
                                    Username
                                    <FontAwesomeIcon icon={faCheck} className={validUsername ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validUsername || !username ? 'hide' : 'invalid'} />
                                </label>
                                <input 
                                    type='text'
                                    id='username'
                                    ref={usernameRef}
                                    className='form-control'
                                    required
                                    value={username}
                                    aria-invalid={validUsername ? 'false' : 'true'}
                                    aria-describedby='unote'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    onFocus={() => setUsernameFocus(true)}
                                    onBlur={() => setUsernameFocus(false)}
                                />
                                <p id='unote' className={usernameFocus && username && !validUsername ? 'instructions' : 'offscreen'} >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 10 characters.
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='password'>
                                    Password
                                    <FontAwesomeIcon icon={faCheck} className={validPassword ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? 'hide' : 'invalid'} />
                                </label>
                                <input 
                                    type='password'
                                    className='form-control'
                                    id='password'
                                    required
                                    autoComplete='off'
                                    value={password}
                                    aria-invalid={validPassword ? 'false' : 'true'}
                                    aria-describedby='pnote'
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <p id='pnote' className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'} >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 10 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.
                                    Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                                </p>
                            </div>

                            <div className='form-group col-12 p-2'>
                                <label htmlFor='confirm_password'>
                                    Confirm Password
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='confirm_password'   
                                    required
                                    autoComplete='off'
                                    value={matchPassword}
                                    aria-invalid={validMatch ? 'false' : 'true'}
                                    aria-describedby='matchnote'
                                    onChange={(e) => setMatchPassword(e.target.value)}
                                    onFocus={() => setPasswordMatchFocus(true)}
                                    onBlur={() => setPasswordMatchFocus(false)}
                                />
                                <p id='matchnote' className={passwordMatchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Passwords must match.
                                </p>
                            </div>

                            <div className='form-group col-12 p-2'>
                                <label htmlFor='firstname'>
                                    First Name
                                    <FontAwesomeIcon icon={faCheck} className={validFirstName ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? 'hide' : 'invalid'} />
                                </label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    id='firstname'
                                    required
                                    autoComplete='off'
                                    value={firstName}
                                    aria-invalid={validFirstName ? 'false' : 'true'}
                                    aria-describedby='firstnamenote'
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onFocus={() => setFirstNameFocus(true)}
                                    onBlur={() => setFirstNameFocus(false)}
                                />
                                <p id='firstnamenote' className={firstNameFocus && !validFirstName ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>

                            <div className='form-group col-12 p-2'>
                                <label htmlFor='lastname'>
                                    Last Name
                                    <FontAwesomeIcon icon={faCheck} className={validLastName ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? 'hide' : 'invalid'} />
                                </label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    id='lastname'
                                    required
                                    autoComplete='off'
                                    value={lastName}
                                    aria-invalid={validLastName ? 'false' : 'true'}
                                    aria-describedby='lastnamenote'
                                    onChange={(e) => setLastName(e.target.value)}
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                />
                                <p id='lastnamenote' className={lastNameFocus && !validLastName ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>

                            <div className='form-group col-12 p-2'>
                                <label htmlFor='specialty'>
                                    Specialty
                                    <FontAwesomeIcon icon={faCheck} className={validSpecialty ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validSpecialty || !specialty ? 'hide' : 'invalid'} />
                                </label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    id='specialty'
                                    required
                                    autoComplete='off'
                                    value={specialty}
                                    aria-invalid={validSpecialty ? 'false' : 'true'}
                                    aria-describedby='specialtynote'
                                    onChange={(e) => setSpecialty(e.target.value)}
                                    onFocus={() => setSpecialtyFocus(true)}
                                    onBlur={() => setSpecialtyFocus(false)}
                                />
                                <p id='specialtynote' className={specialtyFocus && !validSpecialty ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 8 characters.
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='bio'>
                                    Suffix
                                    <FontAwesomeIcon icon={faCheck} className={validSuffix ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validSuffix || !suffix ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='suffix'
                                    required
                                    autoComplete='off'
                                    value={suffix}
                                    aria-invalid={validSuffix ? 'false' : 'true'}
                                    aria-describedby='suffixnote'
                                    onChange={(e) => setSuffix(e.target.value)}
                                    onFocus={() => setSuffixFocus(true)}
                                    onBlur={() => setSuffixFocus(false)}
                                />
                                <p id='suffixnote' className={suffixFocus && !validSuffix ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.
                                    Only letters allow.
                                </p>
                            </div>
                        </Row>
                        <div className='form-group col-12 p-2 text-center'>
                            <Button type='submit' className='col-8 col-sm-6 col-md-4 form-btn' 
                                color='primary'
                            >Sign up</Button>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    )
}

export default RegistrationForm