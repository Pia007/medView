/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Col, Row, Spinner, Table } from 'reactstrap';
import axios from '../api/AxiosApi';
import ProviderModal from '../components/ProviderModal';
import { RenderProvider } from '../components/Renders';
import files from '../images/files.svg';

const PROVIDER_URL = '/providers';
const PATIENT_URL = '/patients';

const Provider = ({
    valueFirstName, 
    valueLastName, 
    valueSpecialty, 
    valueSuffix,
    onSubmit, 
    onChangeFirstName, 
    onChangeLastName, 
    onChangeSpecialty, 
    onChangeSuffix,
    patId, 
    onClick,
    onProviderClick}) => {
    
    const { id } = useParams();


    const [provider, setProvider] = useState('')
    const [ providerInitials, setProviderInitials ] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [patients, setPatients] = useState([])
    const [ message, setMessage ] = useState('')
    const [ patientId, setPatientId ] = useState('')

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [search, setSearch] = useState('');
    console.log(search);

    useEffect (() => {
        const getProvider = async () => {
            try {
                const response = await axios.get(`${PROVIDER_URL}/${id}`);
                setProvider(response.data);

                const providerInitials = response.data.firstName.charAt(0) + response.data.lastName.charAt(0);
                setProviderInitials(providerInitials);
                console.log(providerInitials);
            } catch (error) {
                setError(error);
            }
        }

        const getPatients = async () => {
            try {
                const response = await axios.get(`${PATIENT_URL}/provider/${id}`);
    
                const patients = response.data
                console.log("Array of patients: ", patients);
            
                setPatients(patients);

                // check if array is empty
                if (patients.length === 0) {
                    setPatients(null);
                    setLoading(false);
                    console.log('No patients');
                } else {
                    setMessage("");
                }

                setLoading(false);

                if (!response.data.length > 0 || response.data.length > 0) {
            
                    setPatients(response.data);
                    console.log(patients);

                    const patientIds = patients.map(patient => patient.id);
                    console.log("These are ids: " + patientIds);

                    patientIds.forEach (patientId => {
                        const id = patientId;
                        console.log("This is the id: " + id);
                        setPatientId(patientId);
                        console.log(patientId);
                    });
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
                suffix: provider.suffix
            });
            console.log(update.data);
            toggleModal();
        } catch (error) {
            setError(error);
        }
    }


    if (loading) {
        return  (
            <div className='d-flex flex-row justify-content-center align-items-center my-6'>
                <Spinner color="primary">
                    Loading...
                </Spinner>
            </div>
        )
    }

    // search patients by firstname or lastname or date of birth
    const patientList = patients.filter((patient => {
        return search.toLowerCase() !== "" 
        ? patient.firstName.toLowerCase().includes(search.toLowerCase()) || 
        patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
        patient.dob.includes(search)
        : patient
    })).map(patient => {
        return (
            <tr key={patient.id} className="table-info text-capitalize">
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{moment(patient.dob).format('MM-DD-YYYY')}</td>
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
        <Row className='p-5'>
            <Col className='row m-auto p-3 justify-content-around m-5' >
                <RenderProvider provider={provider} onClick={toggleModal} />
                {patients.length > 0 ? <div></div> : <div>{message}</div>}

                <ProviderModal 
                    isOpen={modal}
                    toggle={toggleModal}
                    onSubmit={handleSubmit}
                    valueFirstName={provider.firstName}
                    valueLastName={provider.lastName}
                    valueSpecialty={provider.specialty}
                    valueSuffix={provider.suffix}
                    onChangeFirstName={(e) => setProvider({...provider, firstName: e.target.value})}
                    onChangeLastName={(e) => setProvider({...provider, lastName: e.target.value})}
                    onChangeSpecialty={(e) => setProvider({...provider, specialty: e.target.value})}
                    onChangeSuffix={(e) => setProvider({...provider, suffix: e.target.value})}
                    onProviderClick={toggleModal}
                />
                {/*  if the provider has no patients */}
                {!patients.length > 0 ? (
                    <Col className='text-center'>
                        You don't have any patients.<br/>
                        Would you like to <Link to={`/provider/${id}/addPatient`}>
                            add a patient</Link>?
                    </Col>
                ) : (
                    <Col className='d-flex flex-column justify-content-center'>
                        <Col  xs={12} sm={10} className='m-auto my-2 text-center'>
                            <Link to={`/provider/${id}/addPatient`}
                                    className=' text-decoration-none add-link'>Add Patient?
                            </Link>
                        </Col>
                        <Col xs={12} sm={10} className='m-auto'>
                            <Card className='p-2 ' id='tableHolder'>
                                <form >
                                    <div className='form-group d-flex flex-row mb-2'>
                                        <label htmlFor="search bar" className='hidden'>Search Patients</label>
                                        <input 
                                            type="text" 
                                            id='search-bar'
                                            placeholder="Search Patients"
                                            className='form-control'
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                </form>
                                <Table hover striped responsive className='pat-table'>
                                    <thead>
                                        <tr className='text-two fw-bold'>
                                            <th>
                                                First
                                            </th>
                                            <th>
                                                Last 
                                            </th>
                                            <th>
                                                DOB
                                            </th>
                                            <th>
                                                Age
                                            </th>
                                            <th className='d-flex justify-content-end'>
                                                Files
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patientList}
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Col>
                )}
            </Col>
        </Row>
    )
}

export default Provider