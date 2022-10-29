import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProviderModal from '../components/ProviderModal';
// import AddPatientForm from '../components/AddPatientForm';
import axios from '../api/AxiosApi';

const PROVIDER_URL = '/providers';
const PATIENT_URL = '/patients';

const Provider = ({valueOne, valueTwo, valueThree, onSubmit, onChangeOne, onChangeTwo, onChangeThree}) => {
    const { id } = useParams();

    const [provider, setProvider] = useState('')
    const [ providerInitials, setProviderInitials ] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [patients, setPatients] = useState('')
    const [ message, setMessage ] = useState('')

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    useEffect (() => {
        const getProvider = async () => {
            try {
                const response = await axios.get(`${PROVIDER_URL}/${id}`);
                setProvider(response.data);
                setLoading(false);

                // get provider initials
                const providerInitials = response.data.firstName.charAt(0) + response.data.lastName.charAt(0);
                setProviderInitials(providerInitials);
                console.log(providerInitials);
            } catch (error) {
                setError(error);
                setLoading(false);
                // setMessage('Error loading provider');
            }
        }


        const getPatients = async () => {
        try {
            const response = await axios.get(`${PATIENT_URL}/provider/${id}`);

            // check if there are any patients
            if (response.data.length > 0) {
        
                setPatients(response.data);
                console.log(response.data);
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
    
    return (
        <div>
            <div className='text-center p-3'>
                <button className='p-1 text-center provider-icon-button' onClick={toggleModal}>
                    <FontAwesomeIcon icon={faUserPen} className='icon provider-icon' />
                </button>
            </div>
            <h1>Provider</h1>
            <h2>{provider.firstName} {provider.lastName}</h2>
            <h2>{provider.specialty}</h2>

            {/* center the modal */}
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
                    <div>
                        <h2>Patients</h2>
                        <Link to={`/provider/${id}/addPatient`}>Add A Patient</Link>
                    
                        {patients.map((patient) => (
                            <div key={patient.id}>
                                <h3>{patient.firstName} {patient.lastName}</h3>
                                <h3>{patient.email}</h3>
                                <h3>{patient.phoneNumber}</h3>
                                <h3>{patient.age}</h3>
                                <h4>{patient.address}, {patient.city}, {patient.zip}</h4>
                            </div>
                        ))}
                    </div>
                )} 
            </>
        </div>
    )
}

export default Provider