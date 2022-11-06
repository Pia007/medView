/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Card, ButtonToolbar, ButtonGroup, Button } from 'reactstrap';
import { RenderPatient } from '../components/Renders';
import PatientModal from '../components/PatientModal';
import NoteModal from '../components/NoteModal';
import edit from '../images/edit.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';
import trash from '../images/delete.svg';
import moment from 'moment';
import axios from '../api/AxiosApi';

const PATIENT_URL = '/patients';
const NOTES_URL = '/notes';;

const Patient = ({
    singlePatient,
    handleClick,
    patCode,
    valuePatientCode,
    valueFirstName, 
    valueLastName,
    valueDob,
    valueGender,
    valueSocial,
    valueBloodType,
    valueEthnicity,
    valueEmail,
    valuePhone,
    valueAddress,
    valueCity,
    valueState,
    valueZip,
    valueContactFirstname,
    valueContactLastname,
    valueContactPhone,
    valueContactRelationship,
    valueAllergies,
    valueInsurance,
    valueConditions,
    valueMedications,
    onChangePatientCode,
    onChangeFirstname,
    onChangeLastname,
    onChangeDob,
    onChangeGender,
    onChangeSocial,
    onChangeBloodType,
    onChangeEthnicity,
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
    isOpen,
    toggleNote,
    onSubmitNote,
    valueBody,
    valueDateCreated,
    onChangeBody,
    onChangeDateCreated,
    onPatientClick,
    onButtonClick}) => { 

    const { id } = useParams();

    const [patient, setPatient] = useState('');
    const [error, setError] = useState('');
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');

    const [body, setBody] = useState('');

    const [dateCreated, setDateCreated] = useState('');

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [modalNote, setModalNote ] = useState(false);
    const toggleNoteModal = () => setModalNote(!modalNote);

    const [ category, setCategory ] = useState('conditions');

    // call the api to get the patient
    useEffect (() => {
        const getPatient = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/${id}`);
                setPatient(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
            }
        }

        const getNotes = async (e) => {

        try {
            const response = await axios.get(`${NOTES_URL}/patient/${id}`);
            
            if (response.data.length > 0 ) {
                setNotes(response.data);
                const note = response.data[0];
                console.log(note)
                
            } else {
                setNotes('');
                setMessage('No notes found for this patient');
            }
            
        } catch (error) {
            setError(error);
        }
    }

        getPatient();
        getNotes();
    }, []);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${PATIENT_URL}/${id}`, {
                patientCode: patient.patientCode,
                firstName: patient.firstName,
                lastName: patient.lastName,
                dob: patient.dob,
                gender: patient.gender,
                socialSecurity: patient.socialSecurity,
                bloodType: patient.bloodType,
                ethnicity: patient.ethnicity,
                email: patient.email,
                phone: patient.phone,
                address: patient.address,
                city: patient.city,
                state: patient.state,
                zip: patient.zip,
                contactFirstname: patient.contactFirstname,
                contactLastname: patient.contactLastname,
                contactPhone: patient.contactPhone,
                contactRelationship: patient.contactRelationship,
                allergies: patient.allergies,
                insurance: patient.insurance,
                conditions: patient.conditions,
                medications: patient.medications
            });
            console.log(response);
            toggleModal();
        } catch (error) {
            setError(error);
        }
    }

    const handleNote = async (e) => {
        e.preventDefault();

        try {
            const newNote = await axios.post(`${NOTES_URL}/patient/${id}`, {
                body,
                dateCreated
            });
            console.log(newNote.data);
            console.log("Pia note", newNote.data)

            setBody('');
            setDateCreated('');
            toggleNoteModal();

            window.location.reload();
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
        
    };

    // delete the node
    const handleDelete = async (noteId) => {
        
        console.log("Delete this note: ", noteId);

        try {
            const deleteNote = await axios.delete(`${NOTES_URL}/${noteId}`);
                console.log(deleteNote.data);
                window.location.href = `/patient/${id}`;

        } catch( error) {
            console.log(error)
            setError(error.response)
        }
    }


    /* display the notes from the array of objects*/
    const displayNotes = () => {
        if (notes.length > 0) {
            return notes.map((note) => {
                return (
                    <Card key={note.id} className='d-flex flex-row justify-content-between'>
                        <div>
                            <p className='m-0 detail text-capitalize'><strong>Date:</strong> <em>{moment(note.dateCreated).format('MM/DD/YYYY')}</em></p>
                            <p className='mb-1 detail text-capitalize'><strong>Text:</strong> {note.body}</p>
                            <p className='mb-1 detail text-capitalize'><strong>Provider:</strong> {note.patientDto.provider.firstName} {note.patientDto.provider.lastName}</p>
                        </div>
                        <div className='d-flex align-content-around justify-content-around'>
                            <button 
                                type='submit' 
                                className='trash-btn' 
                                onClick={() => handleDelete(note.id)}>
                                    {/* <img src={trash} alt='delete' /> */}
                                    <FontAwesomeIcon icon={faXmark} className='icon trash-icon' alt='delete button'/>
                            </button>
                        </div>
                    </Card>
                )
            })
        } else {
            return (
                <div>
                    <p className='detail'>{message}. Would you like to <button onClick={toggleNoteModal} className='btn btn-link px-0 pt-link'>add a note</button>?</p>
                </div>
            )
        }
    }

    const displayConditions = () => {
        if (patient.conditions) {
            return (
                <Card>
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail text-capitalize'>
                            <strong>Conditions: </strong> 
                            {patient.conditions}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions button" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        } else {
            return (
                <div>
                    <p className='detail'> No conditions listed. Would you like to <button onClick={toggleModal} className='btn btn-link px-0 pt-link'>conditions</button>?</p>
                </div>
            )
        }
    }

    const displayAllergies = () => {
        if (patient.allergies) {
            return (
                <Card>
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail text-capitalize'>
                            <strong>Allergies: </strong> 
                            {patient.allergies}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        } else {
            return (
                <div>
                    <p className='detail'> No allergies listed. Would you like to <button onClick={toggleModal} className='btn btn-link px-0 pt-link'>add allergies</button>?</p>
                </div>
            )
        }
    }

    const displayMedications = () => {
        if (patient.medications) {
            return (
                <Card>
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail text-capitalize'>
                            <strong>Medications: </strong> 
                            {patient.medications}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        } else {
            return (
                <div>
                    <p className='detail'> No medications listed. Would you like to <button onClick={toggleModal} className='btn btn-link px-0 pt-link'>add medications</button>?</p>
                </div>
            )
        }
    }


    return (
        <div className='container '>
            <RenderPatient singlePatient={patient} handleClick={toggleModal} />
            <Col className='text-center'>
                <Button type='button' color='primary' className='form-btn' onClick={toggleNoteModal}>Add Note</Button>
            </Col>

            <PatientModal 
                isOpen={modal}
                toggle={() => toggleModal()}
                patCode={patient.patientCode}
                valuePatientCode={patient.patientCode}
                valueFirstName={patient.firstName}
                valueLastName={patient.lastName}
                valueDob={patient.dob}
                valueGender={patient.gender}
                valueSocial={patient.socialSecurity}
                valueBloodType={patient.bloodType}
                valueEthnicity={patient.ethnicity}
                valueEmail={patient.email}
                valuePhone={patient.phone}
                valueAddress={patient.address}
                valueCity={patient.city}
                valueState={patient.state}
                valueZip={patient.zip}
                valueContactFirstname={patient.contactFirstname}
                valueContactLastname={patient.contactLastname}
                valueContactPhone={patient.contactPhone}
                valueContactRelationship={patient.contactRelationship}
                valueAllergies={patient.allergies}
                valueInsurance={patient.insurance}
                valueConditions={patient.conditions}
                valueMedications={patient.medications}
                onChangeFirstName={(e) => setPatient({...patient, firstName: e.target.value})}
                onChangeLastName={(e) => setPatient({...patient, lastName: e.target.value})}
                onChangeDob={(e) => setPatient({...patient, dob: e.target.value})}
                onChangeGender={(e) => setPatient({...patient, gender: e.target.value})}
                onChangeSocial={(e) => setPatient({...patient, socialSecurity: e.target.value})}
                onChangeBloodType={(e) => setPatient({...patient, bloodType: e.target.value})}
                onChangeEthnicity={(e) => setPatient({...patient, ethnicity: e.target.value})}
                onChangeEmail={(e) => setPatient({...patient, email: e.target.value})}
                onChangePhone={(e) => setPatient({...patient, phone: e.target.value})}
                onChangeAddress={(e) => setPatient({...patient, address: e.target.value})}
                onChangeCity={(e) => setPatient({...patient, city: e.target.value})}
                onChangeState={(e) => setPatient({...patient, state: e.target.value})}
                onChangeZip={(e) => setPatient({...patient, zip: e.target.value})}
                onChangeContactFirstname={(e) => setPatient({...patient, contactFirstname: e.target.value})}
                onChangeContactLastname={(e) => setPatient({...patient, contactLastname: e.target.value})}
                onChangeContactPhone={(e) => setPatient({...patient, contactPhone: e.target.value})}
                onChangeContactRelationship={(e) => setPatient({...patient, contactRelationship: e.target.value})}
                onChangeAllergies={(e) => setPatient({...patient, allergies: e.target.value})}
                onChangeInsurance={(e) => setPatient({...patient, insurance: e.target.value})}
                onChangeConditions={(e) => setPatient({...patient, conditions: e.target.value})}
                onChangeMedications={(e) => setPatient({...patient, medications: e.target.value})}
                onSubmit={handleSubmit}
                onPatientClick={toggleModal}
            />

            <Row  className='d-flex p-2'>
                <ButtonToolbar>
                    <ButtonGroup className="m-auto ">
    
                        <button 
                            
                            type="button" 
                            className='btn form-btn button-grp'
                            onClick={() => {setCategory('conditions')}} 
                        >
                            Dx
                        </button>
                        <button 
                            type="button"
                            className='btn form-btn button-grp'
                            onClick={() => {setCategory('allergies')}}
                        >
                            Allergies
                        </button>
                        <button 
                            type="button" 
                            className='btn form-btn button-grp'
                            onClick={() => {setCategory('medications')}}
                        >
                            Rx
                        </button>
                        <button 
                            type="button" 
                            className='btn form-btn button-grp'
                            onClick={() => {
                                setCategory('notes') 
                            }}

                        >
                            Notes
                        </button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Row>

            {
                category === 'conditions' ? displayConditions() : null
            }
            {
                category === 'allergies' ? displayAllergies() : null
            }
            {
                category === 'medications' ? displayMedications() : null
            }
            {
                category === 'notes' ? displayNotes() : null
            }

            <NoteModal
                isOpen={modalNote}
                toggle={toggleNoteModal}
                valueBody={body}
                valueDateCreated={dateCreated.split('/').reverse().join('-')}
                onChangeBody={(e) => setBody(e.target.value)}
                onChangeDateCreated={(e) => setDateCreated(e.target.value)}
                onSubmitNote={handleNote}
                onButtonClick={toggleNoteModal}
            />

        </div>
    );
}

export default Patient;