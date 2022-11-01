import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Card, ButtonToolbar, ButtonGroup, Button } from 'reactstrap';
import { RenderPatient } from '../components/Renders';
import PatientModal from '../components/PatientModal';
import edit from '../images/edit.svg';
import moment from 'moment';
import axios from '../api/AxiosApi';

const PATIENT_URL = '/patients';
const NOTES_URL = '/notes';


const Patient = ({
    singlePatient,
    handleClick,
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
    closeModal,
    patientNote,
    onSubmitNote,
    valueBody,
    valueDateCreated,
    onChangeBody,
    onFocusBody,
    onBlurBody,
    onChangeDateCreated }) => { 

    const { id } = useParams();

    console.log("patient id: " + id);

    const [patient, setPatient] = useState('');
    const [error, setError] = useState('');
    const [notes, setNotes] = useState('');
    const [noteId, setNoteId] = useState('');
    const [message, setMessage] = useState('');

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [ category, setCategory ] = useState('conditions');

    // call the api to get the patient
    useEffect (() => {
        const getPatient = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/${id}`);
                setPatient(response.data);
                console.log(patient)
                console.log(patient.conditions)
                // setLoading(false);
            } catch (error) {
                setError(error);
            }
        }

        const getNotes = async (e) => {
        // e.preventDefault();

        try {
            const response = await axios.get(`${NOTES_URL}/patient/${id}`);
            console.log(response.data);
            
            if (response.data.length > 0 ) {
                console.log(response.data[0].id);
                console.log(response.data[0].body);
                console.log(response.data[0].dateCreated);
                setNotes(response.data);
                console.log("Notes", notes);
                const note = response.data[0];
                console.log("Note", note);
                // console.log(notes);
                console.log(note.body);
                console.log(note.dateCreated);
                console.log(note.patientDto.provider.firstName);
                console.log(note.patientDto.provider.lastName);
                console.log("provider id: ", note.patientDto.provider.id);

                // create a new array of note id
                const noteIds = notes.map((note) => note.id);
                // console.log(noteIds);

                // get the id of each note
                noteIds.forEach (noteId => {
                    const id = noteId;
                    console.log('Note id: ' + id);
                    setNoteId(id);
                    console.log(id)
                });
            } else {
                setNotes('');
                console.log("No notes found for this patient");
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


    /* display the notes from the array of objects*/
    const displayNotes = () => {
        if (notes.length > 0) {
            return notes.map((note) => {
                return (
                    <Card key={note.id}>
                        <p className='m-0'><strong>Date:</strong> <em>{moment(note.dateCreated).format('MM/DD/YYYY')}</em></p>
                        <p className='mb-1'><strong>Text:</strong> {note.body}</p>
                        <p className='mb-1'><strong>Provider:</strong> {note.patientDto.provider.firstName} {note.patientDto.provider.lastName}</p>
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
                        <p className='mb-1'>
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
                        <p className='mb-1'>
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
                        <p className='mb-1'>
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

            <PatientModal 
                isOpen={modal}
                toggle={() => toggleModal()}
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
                closeModal={() => toggleModal()}
            />
            <Row  className='d-flex p-2'>
                <ButtonToolbar>
                    <ButtonGroup className="m-auto">
    
                        <Button 
                            color="primary"
                            onClick={() => {setCategory('conditions')}} 
                        >
                            Dx
                        </Button>
                        <Button 
                            color="primary"
                            onClick={() => {setCategory('allergies')}}
                        >
                            Allergies
                        </Button>
                        <Button 
                            color="primary"
                            onClick={() => {setCategory('medications')}}
                        >
                            Rx
                        </Button>
                        <Button 
                            color="primary"
                            onClick={() => {setCategory('notes')}}
                        >
                            Notes
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Row>

            {/* <Row className='d-flex p-2'> */}
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
            {/* </Row> */}

        </div>
    );

}

export default Patient;