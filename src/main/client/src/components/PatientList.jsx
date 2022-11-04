import React from 'react'
import ProviderPatients from './ProviderPatients'

const PatientList = ({ searchPatients, onClick }) => {

    const results = searchPatients.map(patient => <ProviderPatients key={patient.id} patient={patient} onClick={onClick}/>);

    const content = results?.length ? results : <tr><td colSpan="4">No results found</td></tr>;
        
    return (
        <div>{content}</div>
    )
}

export default PatientList;