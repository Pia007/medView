import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import files from '../images/files.svg';
import { Row, Col, Table, Card} from 'reactstrap';
import { RenderProvider } from '../components/Renders';
import ProviderModal from '../components/ProviderModal';
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
                // setLoading(true);

                // get provider initials
                const providerInitials = response.data.firstName.charAt(0) + response.data.lastName.charAt(0);
                setProviderInitials(providerInitials);
                console.log(providerInitials);
            } catch (error) {
                setError(error);
                // setLoading(false);
            }
        }

        const getPatients = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/provider/${id}`);

                // check if there are any patients
                if (!response.data.length > 0 || response.data.length > 0) {
            
                    console.log(response.data);
                    setPatients(response.data);
                    console.log(patients);

                    console.log("First patient: " + patients[0].id)
                    setMessage(' You do not have any patients yet');

                    // create an array of patient ids
                    const patientIds = response.data.map(patient => patient.id);
                    console.log("These are ids: " + patientIds);

                    // get the id of the each patient
                    patientIds.forEach (patientId => {
                        const id = patientId;
                        console.log("This is the id: " + id);
                        setPatientId(patientId);
                        console.log(patientId);
                    });

                    setLoading(false);
                } else if (response.data.length > 0) {
                    console.log(response.data);
                    setPatients(response.data);
                    console.log(patients);

                    console.log("First patient: " + patients[0].id)
                    setMessage(' You do not have any patients yet');

                    // create an array of patient ids
                    const patientIds = response.data.map(patient => patient.id);
                    console.log("These are ids: " + patientIds);

                    // get the id of the each patient
                    patientIds.forEach (patientId => {
                        const id = patientId;
                        console.log("This is the id: " + id);
                        setPatientId(patientId);
                        console.log(patientId);
                    });

                } else {
                    setPatients(null);
                    setLoading(false);
                    console.log('No patients');
                    
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
            <tr key={patient.id} className="table-info">
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.age}</td>
                <td className='d-flex justify-content-end'>
                    <button className='p-0 file-button mr-0'
                        onClick={
                            () => {
                                window.location.href = `/patient/${patient.id}`;
                            }
                        }
                    >
                        <img src={files} alt="files" className="file-icon" />
                    </button>
                </td>
            </tr>
        )
    })
    
    return (

        <div className='container'>
            
            <RenderProvider provider={provider} onClick={toggleModal} />
            {/*  if there are no patients, show the message, otherwise hide it */}
            {patients.length > 0 ? <div></div> : <div>{message}</div>}

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
            {/*  if the provider has no patients */}
            {!patients.length > 0 ? (
                <Col className='text-center'>
                    You don't have any patients.<br/>
                    Would you like to <Link to={`/provider/${id}/addPatient`}>
                        add a patient</Link>?
                </Col>
            ) : (
                <Row>
                    {/* <h3>Patients</h3> */}
                    <Link to={`/provider/${id}/addPatient`}>Add A Patient</Link>
                
                    <div className='p-2 ' id='tableHolder'>
                        <Table hover striped responsive>
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
                                    <th className='d-flex justify-content-end'>
                                        Files
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
                            </tbody>
                        </Table>
                    </div>
                </Row>

            )}
                {/* {!patients ? (
                    <h3>{message} <br/>
                        Would you like to add a patient to your service? <br/>
                        <Link to={`/provider/${id}/addPatient`}>Add A Patient</Link>
                    </h3>
                ) : (
                    
                )}  */}
    
        </div>
    )
}

export default Provider