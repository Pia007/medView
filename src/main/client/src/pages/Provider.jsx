import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/AxiosApi';

const PROVIDER_URL = '/providers';
const PATIENT_URL = '/patients';

const Provider = () => {
    const { id } = useParams();

    const [provider, setProvider] = useState('')
    const [ providerInitials, setProviderInitials ] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [patients, setPatients] = useState('')
    const [ message, setMessage ] = useState('')


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



    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <div className='text-center p-3'>
                <div className='p-3' style={{border: '2px solid green', width: '60px', borderRadius: '50%'}}>
                    <span className='w-20'>{providerInitials}</span>
                </div>
            </div>
            <h1>Provider</h1>
            <h2>{provider.firstName} {provider.lastName}</h2>
            <h2>{provider.specialty}</h2>

            {/* if not patients then display message */}
            <>
                
                {!patients ? (
                    <h3>{message} <br/>
                        Would you like to add a patient to your service? <br/>
                        <button>Add A Patient</button>
                    </h3>
                ) : (
                    <div>
                        <h2>Patients</h2>
                    
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