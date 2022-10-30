import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RenderPatient } from '../components/Renders';
import axios from '../api/AxiosApi';

const PATIENT_URL = '/patients';


const Patient = ({singlePatient}) => {
    const { id } = useParams();

    console.log("patient id: " + id);

    const [patient, setPatient] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


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
                setLoading(false);
            }
        }

        getPatient();
    }, [])
    

    return (
        <div>
            <RenderPatient singlePatient={patient} />
            
        </div>
    )
}

export default Patient