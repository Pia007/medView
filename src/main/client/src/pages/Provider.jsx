import React, { useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Table, Card} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RenderProvider } from '../components/Renders';
import ProviderModal from '../components/ProviderModal';
import { RenderPatientList } from '../components/Renders';
// import AddPatientForm from '../components/AddPatientForm';
import axios from '../api/AxiosApi';

const PROVIDER_URL = '/providers';
const PATIENT_URL = '/patients';

const Provider = ({valueOne, valueTwo, valueThree, onSubmit, onChangeOne, onChangeTwo, onChangeThree, patId, onClick}) => {
    const { id } = useParams();

    console.log("provider id: " + id);

    const [provider, setProvider] = useState('')
    const [ providerInitials, setProviderInitials ] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [patients, setPatients] = useState('')
    const [ message, setMessage ] = useState('')
    const [ patientId, setPatientId ] = useState('')

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    useEffect (() => {
        const getProvider = async () => {
            try {
                const response = await axios.get(`${PROVIDER_URL}/${id}`);
                setProvider(response.data);
                setLoading(true);

                // get provider initials
                const providerInitials = response.data.firstName.charAt(0) + response.data.lastName.charAt(0);
                setProviderInitials(providerInitials);
                console.log(providerInitials);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }


        const getPatients = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/provider/${id}`);

                // check if there are any patients
                if (response.data.length > 0) {
            
                    console.log(response.data);
                    setPatients(response.data);
                    console.log(patients);

                    console.log("First patient: " + patients[0].id)

                    // create an array of patient ids
                    const patientIds = response.data.map(patient => patient.id);
                    console.log("These are ids: " + patientIds);

                    // get the id of the each patient
                    patientIds.forEach (patientId => {
                        const id = patientId;
                        console.log("This is the id: " + id);
                        // setPatientId(patientId);
                        console.log(patientId);
                    });

                    setLoading(false);
                } else {
                    setPatients(null);
                    setLoading(false);
                    console.log('No patients');
                    setMessage(' You do not have any patients yet');
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
            getProvider();
            getPatients();
        }, []);

    useEffect(() => {
        setError('');
    }, [provider, patients, message])

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const update = await axios.put(`${PROVIDER_URL}/${id}`, {
                firstName: provider.firstName,
                lastName: provider.lastName,
                specialty: provider.specialty,
            });
            console.log(update.data);
            toggleModal();
        } catch (error) {
            setError(error);
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }

    

    const patientList = patients.map(patient => {
        return (
            <tr key={patient.id} >
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.age}</td>
                    <button
                        onClick={
                            () => {
                                window.location.href = `/patient/${patient.id}`;
                            }
                        }
                    >
                        Info
                    </button>
            </tr>
        )
    })

     
    return (


        <div className='container'>
            <RenderProvider provider={provider} onClick={toggleModal} />

            <ProviderModal 
                isOpen={modal}
                toggle={toggleModal}
                onSubmit={handleSubmit}
                valueOne={provider.firstName}
                valueTwo={provider.lastName}
                valueThree={provider.specialty}
                onChangeOne={(e) => setProvider({...provider, firstName: e.target.value})}
                onChangeTwo={(e) => setProvider({...provider, lastName: e.target.value})}
                onChangeThree={(e) => setProvider({...provider, specialty: e.target.value})}
            />
            
            <>
                {!patients ? (
                    <h3>{message} <br/>
                        Would you like to add a patient to your service? <br/>
                        <Link to={`/provider/${id}/addPatient`}>Add A Patient</Link>
                    </h3>
                ) : (
                    <Row>
                        <h3>Patients</h3>
                        <Link to={`/provider/${id}/addPatient`}>Add A Patient</Link>
                        {/* {patientList} */}
                    
                        <Col>
                        <Table hover striped>
                            <thead>
                                <tr>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Age
                                    </th>
                                    {/* <th>
                                        Email
                                    </th>
                                    <th>
                                        Phone Number
                                    </th> */}
                                    {/* <th>
                                        Username
                                    </th>
                                    <th>
                                        Username
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {patientList}
                                {/* {patients.map((patient) => (
                                    
                                        <tr key={patient.id} md="12" >
                                            <RenderPatientList  patient={patient}  onClick={handlePatientClick} />
                                        </tr>
                                    
                                ))} */}
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                )} 
            </>
        </div>
    )
}

export default Provider