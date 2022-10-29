import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../api/AxiosApi';
import { Row, Card } from 'reactstrap'

const PROVIDER_URL = '/providers/';
const ADD_PATIENT_URL = '/patients/provider/';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,9}$/;

// firstname regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const FIRSTNAME_REGEX = /^[A-z- ]{2,}$/;

// lastname regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const LASTNAME_REGEX = /^[A-z- ]{2,}$/;

// dob format - must be in the format YYYY-MM-DD
const DOB_REGEX = /^\d{4}-\d{2}-\d{2}$/;

// email regex - must be at least 5 characters long, can contain loweletters, hyphens or spaces
const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/;

// phone regex - must be at least 10 characters long, can contain numbers, hyphens or spaces
const PHONE_REGEX = /^[0-9- ]{10,}$/;

// address regex - must be at least 5 characters long, can contain loweletters, hyphens or spaces
const ADDRESS_REGEX = /^[A-z0-9- ]{5,}$/;

// city regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const CITY_REGEX = /^[A-z- ]{2,}$/;

// state regex - must be at least 2 characters long, can contain loweletters, hyphens or spaces
const STATE_REGEX = /^[A-z- ]{2,}$/;

// zip regex - must be at least 5 characters long, can contain numbers, hyphens or spaces
const ZIP_REGEX = /^[0-9- ]{5,}$/;

// allergies regex - must be at least 2 characters long, can contain loweletters, hypens, commas or spaces
const ALLERGIES_REGEX = /^[A-z-, ]{2,}$/;

// insurance regex - must be at least 2 characters long, can contain loweletters, hypens, commas or spaces
const INSURANCE_REGEX = /^[A-z-, ]{2,}$/;

// conditions regex - must be at least 2 characters long, can contain loweletters, hypens, commas or spaces
const CONDITIONS_REGEX = /^[A-z-, ]{2,}$/;

// medications regex - must be at least 2 characters long, can contain loweletters, hypens, commas or spaces
const MEDICATIONS_REGEX = /^[A-z-, ]{2,}$/;



const AddPatientForm = ({
    onChangeUsername, 
    onChangeFirstName, 
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangeAddress,
    onChangeCity,
    onChangeState,
    onChangeZip,
    onChangeAllergies,
    onChangeInsurance,
    onChangeConditions,
    onChangeMedications,
    onSubmit,
    valueUsername,
    valueFirstName,
    valueLastName,
    valueEmail,
    valuePhone,
    valueAddress,
    valueCity,
    valueState,
    valueZip,
    valueAllergies,
    valueInsurance,
    valueConditions,
    valueMedications,
    usernameValid }) => {

    const { id } = useParams();
    const usernameRef = useRef();
    const errRef = useRef();


    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState('');

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState('');

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState('');

    const [dob, setDob] = useState('');
    const [validDob, setValidDob] = useState(false);
    const [dobFocus, setDobFocus] = useState('');

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState('');

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState('');

    const [address, setAddress] = useState('');
    const [validAddress, setValidAddress] = useState(false);
    const [addressFocus, setAddressFocus] = useState('');

    const [city, setCity] = useState('');
    const [validCity, setValidCity] = useState(false);
    const [cityFocus, setCityFocus] = useState('');

    const [state, setState] = useState('');
    const [validState, setValidState] = useState(false);
    const [stateFocus, setStateFocus] = useState('');

    const [zip, setZip] = useState('');
    const [validZip, setValidZip] = useState(false);
    const [zipFocus, setZipFocus] = useState('');

    const [allergies, setAllergies] = useState('');
    const [validAllergies, setValidAllergies] = useState(false);
    const [allergiesFocus, setAllergiesFocus] = useState('');

    const [insurance, setInsurance] = useState('');
    const [validInsurance, setValidInsurance] = useState(false);
    const [insuranceFocus, setInsuranceFocus] = useState('');

    const [conditions, setConditions] = useState('');
    const [validConditions, setValidConditions] = useState(false);
    const [conditionsFocus, setConditionsFocus] = useState('');

    const [medications, setMedications] = useState('');
    const [validMedications, setValidMedications] = useState(false);
    const [medicationsFocus, setMedicationsFocus] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');


    useEffect (() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidUsername(USERNAME_REGEX.test(username));
        setValidFirstName(FIRSTNAME_REGEX.test(firstName));
        setValidLastName(LASTNAME_REGEX.test(lastName));
        setValidDob(DOB_REGEX.test(dob));
        setValidEmail(EMAIL_REGEX.test(email));
        setValidPhone(PHONE_REGEX.test(phone));
        setValidAddress(ADDRESS_REGEX.test(address));
        setValidCity(CITY_REGEX.test(city));
        setValidState(STATE_REGEX.test(state));
        setValidZip(ZIP_REGEX.test(zip));
        setValidAllergies(ALLERGIES_REGEX.test(allergies));
        setValidInsurance(INSURANCE_REGEX.test(insurance));
        setValidConditions(CONDITIONS_REGEX.test(conditions));
        setValidMedications(MEDICATIONS_REGEX.test(medications));
        
    }, [username, 
        firstName, 
        lastName,
        dob,
        email, 
        phone, 
        address, 
        city, 
        state,     
        zip, 
        allergies,
        insurance, 
        conditions, 
        medications
    ]);
    
    useEffect(() => {
        setError('');
    }, [username, 
        firstName, 
        lastName,
        dob,
        email, 
        phone, 
        address, 
        city, 
        state,     
        zip, 
        allergies,
        insurance,
        conditions, 
        medications
    ]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, firstName, lastName, dob, email, phone, address, city, state, zip, allergies, insurance, conditions, medications);


        try {
                const newPatient = await axios.post(`${ADD_PATIENT_URL}/${id}`, {
                username,
                firstName,
                lastName,
                dob,
                email,
                phone,
                address,
                city,
                state,
                zip,
                allergies,
                insurance,
                conditions,
                medications
            });
            console.log(JSON.stringify(newPatient.data));

            window.location.href = `/provider/${id}`;

            setUsername('');
            setFirstName('');
            setLastName('');
            setDob('');
            setEmail('');
            setPhone('');
            setAddress('');
            setCity('');
            setState('');
            setZip('');
            setAllergies('');
            setInsurance('');
            setConditions('');
            setMedications('');
            setSuccess(true);

        } catch (erorr) {
            if (!error?.response) {
                setError(error.response.data);
            } else if ( error.response?.status === 409) {
                setError('Username already exists');
            } else {
                setError('Unable to add patient');
            }
            errRef.current.focus();
        }   
    }

    return (
        <>
            <section>
                <p ref={errRef} className={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                <Card>
                    <form action="" onSubmit={handleSubmit} className='p-3'>
                        <h1>Add Patient Form</h1>
                        <Row>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    ref={usernameRef}
                                    className='form-control'
                                    id='username'
                                    name='username'
                                    value={valueUsername}
                                    aria-invalid={validUsername ? 'false' : 'true'}
                                    aria-describedby='newpatintnote'
                                    autoComplete='off'
                                    onChange={onChangeUsername}
                                    onFocus={() => setUsernameFocus('focus')}
                                    onBlur={() => setUsernameFocus('')}
                                />
                                <p id='newpatientnote' className={usernameFocus && username && !validUsername ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <FontAwesomeIcon icon={faTimes} className={validUsername || !username ? 'hide' : 'invalid'} />
                                    4 to 10 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>  
                            </div>
                            <div className="form-group">
                                <label htmlFor='firstname'>
                                    First Name:
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
                                    Must be at least 2 characters.<br />
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='lastname'>
                                    Last Name:
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
                                    Must be at least 2 characters.<br />
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='dob'>
                                    Date of Birth:
                                    <FontAwesomeIcon icon={faCheck} className={validDob ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validDob || !dob ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='dob'
                                    required
                                    autoComplete='off'
                                    placeholder='YYYY-MM-DD'
                                    value={dob}
                                    aria-invalid={validDob ? 'false' : 'true'}
                                    aria-describedby='dobnote'
                                    onChange={(e) => setDob(e.target.value)}
                                    onFocus={() => setDobFocus(true)}
                                    onBlur={() => setDobFocus(false)}
                                />
                                <p id='dobnote' className={dobFocus && !validDob ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be a valid date, YYYY-MM_DD.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    required
                                    autoComplete='off'
                                    value={email}
                                    aria-invalid={validEmail ? 'false' : 'true'}
                                    aria-describedby='emailnote'
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <p id='emailnote' className={emailFocus && !validEmail ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be a valid email address.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>
                                    Phone:
                                    <FontAwesomeIcon icon={faCheck} className={validPhone ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='tel'
                                    className='form-control'
                                    id='phone'
                                    required
                                    autoComplete='off'
                                    value={phone}
                                    aria-invalid={validPhone ? 'false' : 'true'}    
                                    aria-describedby='phonenote'
                                    onChange={(e) => setPhone(e.target.value)}
                                    onFocus={() => setPhoneFocus(true)}
                                    onBlur={() => setPhoneFocus(false)}
                                />
                                <p id='phonenote' className={phoneFocus && !validPhone ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be a valid phone number.<br />
                                    10 digits, with dashes.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='address'>
                                    Address:
                                    <FontAwesomeIcon icon={faCheck} className={validAddress ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validAddress || !address ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='address'
                                    required
                                    autoComplete='off'
                                    value={address}
                                    aria-invalid={validAddress ? 'false' : 'true'}
                                    aria-describedby='addressnote'
                                    onChange={(e) => setAddress(e.target.value)}
                                    onFocus={() => setAddressFocus(true)}
                                    onBlur={() => setAddressFocus(false)}
                                />
                                <p id='addressnote' className={addressFocus && !validAddress ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 5 characters.<br />
                                    Letters, numbers, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='city'>
                                    City:
                                    <FontAwesomeIcon icon={faCheck} className={validCity ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validCity || !city ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='city'
                                    required
                                    autoComplete='off'
                                    value={city}
                                    aria-invalid={validCity ? 'false' : 'true'}
                                    aria-describedby='citynote'
                                    onChange={(e) => setCity(e.target.value)}
                                    onFocus={() => setCityFocus(true)}
                                    onBlur={() => setCityFocus(false)}
                                />
                                <p id='citynote' className={cityFocus && !validCity ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.<br />
                                    Letters, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='state'>
                                    State:
                                    <FontAwesomeIcon icon={faCheck} className={validState ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validState || !state ? 'hide' : 'invalid'} />
                                </label>    
                                <input
                                    type='text'
                                    className='form-control'
                                    id='state'
                                    required
                                    autoComplete='off'
                                    value={state}
                                    aria-invalid={validState ? 'false' : 'true'}
                                    aria-describedby='statenote'
                                    onChange={(e) => setState(e.target.value)}
                                    onFocus={() => setStateFocus(true)}
                                    onBlur={() => setStateFocus(false)}
                                />
                                <p id='statenote' className={stateFocus && !validState ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be a valid state abbreviation.<br />
                                    2 letters, no spaces or punctuation.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='zip'>
                                    Zip:
                                    <FontAwesomeIcon icon={faCheck} className={validZip ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validZip || !zip ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='zip'
                                    required
                                    autoComplete='off'
                                    value={zip}
                                    aria-invalid={validZip ? 'false' : 'true'}
                                    aria-describedby='zipnote'
                                    onChange={(e) => setZip(e.target.value)}
                                    onFocus={() => setZipFocus(true)}
                                    onBlur={() => setZipFocus(false)}
                                />
                                <p id='zipnote' className={zipFocus && !validZip ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be a valid zip code.<br />
                                    5 digits, no spaces or punctuation.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='allergies'>
                                    Allergies:
                                    <FontAwesomeIcon icon={faCheck} className={validAllergies ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validAllergies || !allergies ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='allergies'
                                    required
                                    autoComplete='off'
                                    value={allergies}
                                    aria-invalid={validAllergies ? 'false' : 'true'}
                                    aria-describedby='allergiesnote'
                                    onChange={(e) => setAllergies(e.target.value)}
                                    onFocus={() => setAllergiesFocus(true)}
                                    onBlur={() => setAllergiesFocus(false)}
                                />
                                <p id='allergiesnote' className={allergiesFocus && !validAllergies ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.<br />
                                    Letters, numbers, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='medications'>
                                    Medications:
                                    <FontAwesomeIcon icon={faCheck} className={validMedications ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validMedications || !medications ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='medications'
                                    required
                                    autoComplete='off'
                                    value={medications}
                                    aria-invalid={validMedications ? 'false' : 'true'}
                                    aria-describedby='medicationsnote'
                                    onChange={(e) => setMedications(e.target.value)}
                                    onFocus={() => setMedicationsFocus(true)}
                                    onBlur={() => setMedicationsFocus(false)}
                                />
                                <p id='medicationsnote' className={medicationsFocus && !validMedications ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.<br />
                                    Letters, numbers, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='conditions'>
                                    Conditions:
                                    <FontAwesomeIcon icon={faCheck} className={validConditions ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validConditions || !conditions ? 'hide' : 'invalid'} />
                                </label>
                                <input

                                    type='text' 
                                    className='form-control'
                                    id='conditions'
                                    required
                                    autoComplete='off'
                                    value={conditions}
                                    aria-invalid={validConditions ? 'false' : 'true'}
                                    aria-describedby='conditionsnote'
                                    onChange={(e) => setConditions(e.target.value)}
                                    onFocus={() => setConditionsFocus(true)}
                                    onBlur={() => setConditionsFocus(false)}
                                />
                                <p id='conditionsnote' className={conditionsFocus && !validConditions ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.<br />
                                    Letters, numbers, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <label htmlFor='insurance'>
                                    Insurance:
                                    <FontAwesomeIcon icon={faCheck} className={validInsurance ? 'valid' : 'hide'} />
                                    <FontAwesomeIcon icon={faTimes} className={validInsurance || !insurance ? 'hide' : 'invalid'} />
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='insurance'
                                    required
                                    autoComplete='off'
                                    value={insurance}
                                    aria-invalid={validInsurance ? 'false' : 'true'}
                                    aria-describedby='insurancenote'
                                    onChange={(e) => setInsurance(e.target.value)}
                                    onFocus={() => setInsuranceFocus(true)}
                                    onBlur={() => setInsuranceFocus(false)}
                                />
                                <p id='insurancenote' className={insuranceFocus && !validInsurance ? 'instructions' : 'offscreen'}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must be at least 2 characters.<br />
                                    Letters, numbers, spaces, and hyphens allowed.
                                </p>
                            </div>
                            <div className="form-group">
                                <button type='submit'>
                                    Submit
                                </button>
                            </div>
                        </Row>
                    </form>
                </Card>
            </section>
        </>
    )
}

export default AddPatientForm