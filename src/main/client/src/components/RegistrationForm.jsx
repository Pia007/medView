import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../api/AxiosApi';
import { Row, Card, Button } from 'reactstrap';


const REGISTER_URL = '/providers/register';
// username regex - must start with lower or upper case letter, must be followed by  3-9 charcters that can be lower/upper case letters, digits, hyphens or underscores, overall it must be 4 to 10 characters long
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,9}$/;

// password regex - must be at least 4-10 characters long, must contain at least one lower case letter, one upper case letter, one digit and one special character
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/;

// firstname regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const FIRSTNAME_REGEX = /^[A-z- ]{2,}$/;

// lastname regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const LASTNAME_REGEX = /^[A-z- ]{2,}$/;

// regex for specialty - must be at least 8 characters long, can have letters, spaces, hyphens, commas, apostrophes, periods
const SPECIALTY_REGEX = /^[A-z ,.'-]{8,}$/;

// regex for suffix - must be at least 2 characters long, only letters


const RegistrationForm = () => {
    // set the focus on the username when the component loads
    const usernameRef = useRef();

    // if error, focus on the input that caused the error, screen reader will read the error message
    const errRef = useRef();

    const navigate = useNavigate();


    // state for the username input
    const [username, setUsername] = useState('');
    // boolean to check if the username is valid
    const [validUsername, setValidUsername] = useState(false);
    // boolean if userfield is focused or not
    const [usernameFocus, setUsernameFocus] = useState(false);


    // password state
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    // password match state
    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [passwordMatchFocus, setPasswordMatchFocus] = useState(false);

    // first name state
    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    // last name state
    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    // specialty state
    const [specialty, setSpecialty] = useState('')
    const [validSpecialty, setValidSpecialty] = useState(false);
    const [specialtyFocus, setSpecialtyFocus] = useState(false);

    // suffix state
    const [suffix, setSuffix] = useState('');
    const [validSuffix, setValidSuffix] = useState(false);
    const [suffixFocus, setSuffixFocus] = useState(false);

    // state for success/ error messages
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // set the focus on username input when the component loads
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    // useEffect to validate the username
    useEffect(() => {
        const result = USERNAME_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidUsername(USERNAME_REGEX.test(username)); //all in one line without the console.log
        setValidUsername(result);
    }, [username]);

    // useEffect to validate the password
    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(PASSWORD_REGEX.test(password)); //all in one line without the console.log
        const match = password === matchPassword;
        setValidMatch(match)
        setValidPassword(result);
    }, [password, matchPassword]);

    // useEffect to validate the first name
    useEffect(() => {
        const result = FIRSTNAME_REGEX.test(firstName);
        console.log(result);
        console.log(firstName);
        // setValidName(USER_REGEX.test(user)); all in one line without the console.log
        setValidFirstName(result);
    }, [firstName]);

    // useEffect to validate the last name
    useEffect(() => {
        const result = LASTNAME_REGEX.test(lastName);
        console.log(result);
        console.log(lastName);
        // setValidName(USER_REGEX.test(user)); all in one line without the console.log
        setValidLastName(result);
    }, [lastName]);

    // useEffect to validate the specialty
    useEffect(() => {
        const result = SPECIALTY_REGEX.test(specialty);
        console.log(result);
        console.log(specialty);
        setValidSpecialty(result);
    }, [specialty]);

    // useEffect to validate the suffix
    useEffect(() => {
        const result = LASTNAME_REGEX.test(suffix);
        console.log(result);
        console.log(suffix);
        setValidSuffix(result);
    }, [suffix]);

    // useEffect for error message
    useEffect(() => {
        setError('');
    }, [username, password, firstName, lastName, specialty, suffix]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
        
        try {
            const registration = await axios.post(REGISTER_URL, {
                username,
                password,
                firstName,
                lastName,
                specialty,
                suffix
            });
            
            console.log(JSON.stringify(registration.data));

            navigate('/login');

            // clear the form
            setUsername('');
            setPassword('');
            setMatchPassword('');
            setFirstName('');
            setLastName('');
            setSpecialty('');
            setSuffix('');
            setSuccess(true);

        } catch (error) {
            if (!error?.response) {
                setError('Something went wrong, please try again later');
            } else if ( error.response?.status === 409) {
                setError('Username already exists, please choose another one');
            } else {
                setError('Registration failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <section className='row m-auto p-3 justify-content-around m-5'>
                <p ref={errRef} className={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>

                <Card className='col-12 col-md-10 col-lg-8  p-2 login-card mt-2 hv-center align-self-center'>
                    <h1 className='text-left p-2 mb-0 form-title'>Sign up</h1>
                    <h2 className='text-left p-2 mb-0 form-st'>
                            Already have an account? <Link to='/login' className='text-decoration-none form-link'> Sign in</Link> here.
                        </h2>
                    <form onSubmit={handleSubmit} className='py-2 px-3' style={{border: ''}}>
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