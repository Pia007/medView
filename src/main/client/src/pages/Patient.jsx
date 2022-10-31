import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import { RenderPatient } from '../components/Renders';
import PatientModal from '../components/PatientModal';
import { RenderNotes } from '../components/Renders';
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
    onChangeDateCreated}) => { 

    const { id } = useParams();

    console.log("patient id: " + id);

    const [patient, setPatient] = useState('');
    const [error, setError] = useState('');
    const [notes, setNotes] = useState('');
    const [noteId, setNoteId] = useState('');
    const [message, setMessage] = useState('');

    const [note , setNote] = useState('');
    const [body, setBody] = useState('');
    const [dateCreated, setDateCreated] = useState('');



    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [noteModal, setNoteModal] = useState(false);
    const toggleNoteModal = () => setNoteModal(!noteModal);

    // call the api to get the patient
    useEffect (() => {
        const getPatient = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/${id}`);
                setPatient(response.data);
                console.log(patient)
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
                // console.log(notes);
                // console.log(notes.note.body);
                // console.log(notes.note.dateCreated);
                
                // if {notes.length > 0} {

               

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
            // } else if ( response.data.length > 0) {
            //     // console.log(response.data);
            //     setNotes(response.data);
            //     // console.log(notes)

            //     // create a new array of note id
            //     const noteIds = notes.map((note) => note.id);
            //     console.log(noteIds);

            //     // get the id of each note
            //     noteIds.forEach (noteId => {
            //         const id = noteId;
            //         console.log('Note id: ' + id);
            //         setNoteId(id);
            //         console.log(id)
            //     });
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

    // const handleNoteSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const note = await axios.post(`${NOTES_URL}/patient/${id}`, {
    //             body,
    //             // set current date
    //             dateCreated: moment(new Date().toLocaleDateString()).format('YYYY-MM-DD')
    //         });
    //         console.log(note);
    //         toggleModal();
    //     } catch (error) {
    //         setError(error);
    //     }
    // }

    
    /* display the notes from the array of objects*/
    const displayNotes = () => {
        if (notes.length > 0) {
            return notes.map((note) => {
                return (
                    <div key={note.id}>
                        <Link to={`/patient/${id}/addNote`} >add a note</Link>
                        <p>{note.body}</p>
                        {/* moment.js to convert the date to Month day year */}
                        <p>{moment(note.dateCreated).format('MM/DD/YYYY')}</p>
                        <p>{note.patientDto.provider.firstName} {note.patientDto.provider.lastName}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
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





    // const noteList = notes?.map((note, index) => {
    //     return (
    //         <Row key={note.id}>
    //             <Col>
    //                 <p>{note.body}</p>
    //             </Col>
                
    //         </Row>
    //     );
    // });
    

    return (
        <div className='container'>
            <RenderPatient singlePatient={patient} handleClick={toggleModal} />

            <PatientModal 
                isOpen={modal}
                toggle={() => toggleModal()}
                valueFirstName={patient.firstName}
                valueLastName={patient.lastName}
                valueDob={patient.dob}
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
            {/* < AddNoteModal
                isOpen={noteModal}
                toggle={() => toggleNoteModal()}
                valueBody={note.body} 
                onChangeBody={(e) => setNote({...note, body: e.target.value})}
                valueDateCreated={note.dateCreated}
                onChangeDateCreated={(e) => setNote({...note, dateCreated: e.target.value})}
                onSubmitNote={handleNoteSubmit}

            /> */}

            <Row>
                <Col>
                    <button>
                        Demographics
                    </button>
                </Col>
                <Col>
                    <button>
                        Conditions
                    </button>
                </Col>
                <Col>
                    <button>
                        Medications
                    </button>
                </Col>
                <Col>
                    <button >
                        Notes
                    </button>
                </Col>
                
            </Row>
            {/* display the notes */}
            <div>
                {displayNotes()}
            </div>                      

            
            
        </div>
    );

}

export default Patient;