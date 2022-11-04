import React from 'react'
import files from '../images/files.svg';
// import { useNavigate } from 'react-router-dom';

const ProviderPatients = ({patient, onClick}) => {
    return (
        // <tr key={patient.id} className="table-info">
        <>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td className='d-flex justify-content-end'>
                <button className='p-0 file-button mr-0'
                    onClick={onClick}
                        // () => {
                        //     // window.location.href = `/patient/${patient.id}`;
                        //     navigate(`/patient/${patient.id}`);
                        // }

                >
                    <img src={files} alt="files" className="file-icon" />
                </button>
            </td>
        </>
    )
}

export default ProviderPatients