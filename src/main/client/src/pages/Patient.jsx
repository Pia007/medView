import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'reactstrap';
import { RenderPatient } from '../components/Renders';
import PatientModal from '../components/PatientModal';
import axios from '../api/AxiosApi';

const PATIENT_URL = '/patients';


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
    closeModal }) => { 

    const { id } = useParams();

    console.log("patient id: " + id);

    const [patient, setPatient] = useState('');
    const [error, setError] = useState('');

    const [modal, setModal] = useState(false);
    // ternary operator to set modal to true or false
    const toggleModal = () => setModal(!modal);
    // if modal is open, set modal to false
    // const close = () => {setModal(true);
    // const closeModal = () => { setModal(!modal)}


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

        getPatient();
    }, []);

    // useEffect(() => {
    //     setError('');
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${PATIENT_URL}/${id}`, {
                firstName: patient.valueFirstName,
                lastName: patient.valueLastName,
                dob: patient.valueDob,
                email: patient.valueEmail,
                phone: patient.valuePhone,
                address: patient.valueAddress,
                city: patient.valueCity,
                state: patient.valueState,
                zip: patient.valueZip,
                allergies: patient.valueAllergies,
                insurance: patient.valueInsurance,
                conditions: patient.valueConditions,
                medications: patient.valueMedications
            });
            console.log(response);
            toggleModal();
        } catch (error) {
            setError(error);
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
                    <button>
                        Notes
                    </button>
                </Col>
                
            </Row>
            
        </div>
    );

}

export default Patient;