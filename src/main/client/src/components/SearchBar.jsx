import React from 'react'
import  { FontAwesomeIcon }  from  '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ patients, setSearchPatients}) => {
    
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchPatients(patients);

        // by firstName or lastName
        const filteredPatients = patients.filter(patient => patient.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || patient.lastName.toLowerCase().includes(e.target.value.toLowerCase()));

        setSearchPatients(filteredPatients);
    };

    return (
        <>
            <form  className='search' onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className='search-input'
                    id='search'
                    onChange={handleSearchChange}
                />
                <button className='search-button' type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </>
    )
}

export default SearchBar;