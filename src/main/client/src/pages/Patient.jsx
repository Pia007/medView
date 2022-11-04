import React, {useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Row, Col, Card, ButtonToolbar, ButtonGroup, Button } from 'reactstrap';
import { RenderPatient } from '../components/Renders';
import PatientModal from '../components/PatientModal';
import NoteModal from '../components/NoteModal';
import edit from '../images/edit.svg';
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
    valueAllergies,
    valueInsurance,
    valueConditions,
    valueMedications,
    onChangePatientCode,
    onChangeFirstName,
    onChangeLastName,
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
    onChangeDateCreated
     }) => { 

    const { id } = useParams();

    const navigate = useNavigate();



    const [patient, setPatient] = useState('');
    const [error, setError] = useState('');
    const [notes, setNotes] = useState('');
    const [noteId, setNoteId] = useState('');
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
                // console.log(patient)
                // console.log(patient.conditions)
                // setLoading(false);
            } catch (error) {
                setError(error);
            }
        }

        const getNotes = async (e) => {
        // e.preventDefault();

        try {
            const response = await axios.get(`${NOTES_URL}/patient/${id}`);
            // console.log(response.data);
            
            if (response.data.length > 0 ) {
                // console.log(response.data[0].id);
                // console.log(response.data[0].body);
                // console.log(response.data[0].dateCreated);
                setNotes(response.data);
                // console.log("Notes", notes);
                const note = response.data[0];
                // console.log("Note", note);
                // console.log(notes);
                // console.log(note.body);
                // console.log(note.dateCreated);
                // console.log(note.patientDto.provider.firstName);
                // console.log(note.patientDto.provider.lastName);
                // console.log("provider id: ", note.patientDto.provider.id);

                // create a new array of note id
                const noteIds = notes.map((note) => note.id);
                // console.log(noteIds);
                console.log(note.dateCreated)

                // get the id of each note
                noteIds.forEach (noteId => {
                    const id = noteId;
                    // console.log('Note id: ' + id);
                    setNoteId(id);
                    // console.log(id)
                });
            } else {
                setNotes('');
                // console.log("No notes found for this patient");
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
            // navigate(`/patient/${id}`);
            

            setBody('');
            setDateCreated('');
            toggleNoteModal();
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
                console.log(deleteNote.data)
                // reload the page affter deleting note
                // navigate(`/patient/${id}`);
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
                            <p className='m-0 detail'><strong>Date:</strong> <em>{moment(note.dateCreated).format('MM/DD/YYYY')}</em></p>
                            {/* <p className='m-0 detail'><strong>Date:</strong> <em>11/01/2022</em></p> */}
                            <p className='mb-1 detail'><strong>Text:</strong> {note.body}</p>
                            <p className='mb-1 detail'><strong>Provider:</strong> {note.patientDto.provider.firstName} {note.patientDto.provider.lastName}</p>
                        </div>
                        <div className='d-flex align-content-around'>
                            <button type='submit' className='trash-btn' onClick={() => handleDelete(note.id)}><img src={trash} alt='delete' /></button>
                        </div>
                    </Card>
                )
            })
        } else {
            return (
                <div>
                    <p>{message}. Would you like to <Link to={`/patient/${id}/addNote`} >add a note</Link>?</p>
                </div>
            )
        }
    }

    const displayConditions = () => {
        if (patient.conditions) {
            return (
                <Card>
                    {/* make the first letter  of each word uppercase */}
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail'>
                            <strong>Conditions: </strong> 
                            {patient.conditions.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        }
    }

    const displayAllergies = () => {
        if (patient.allergies) {
            return (
                <Card>
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail'>
                            <strong>Allergies: </strong> 
                            {patient.allergies.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        }
    }

    const displayMedications = () => {
        if (patient.medications) {
            return (
                <Card>
                    <Col className='d-flex justify-content-between'>
                        <p className='my-1 detail'>
                            <strong>Medications: </strong> 
                            {patient.medications.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}
                        </p>
                        <button className='edit-conditions-btn'
                            onClick={toggleModal}
                        >
                            <img src={edit} alt="edit conditions" className="edit-icon" />
                        </button>
                    </Col>
                </Card>
            )
        }
    }


    return (
        <div className='container'>
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
                onChangeAllergies={(e) => setPatient({...patient, allergies: e.target.value})}
                onChangeInsurance={(e) => setPatient({...patient, insurance: e.target.value})}
                onChangeConditions={(e) => setPatient({...patient, conditions: e.target.value})}
                onChangeMedications={(e) => setPatient({...patient, medications: e.target.value})}
                onSubmit={handleSubmit}
                // closeModal={() => toggleModal()}
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
            />

        </div>
    );

}

export default Patient;