import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Registration from './Registration';
import Login from './Login';
import Provider from './Provider';
import AddPatientForm from '../components/AddPatientForm';

const Main = () => {


    return (
        <div>
            <Header />
            <div className='d-flex bg-light' style={{width: '100%', height: 'auto'}}>
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Registration />} />
                    
                    <Route path='provider/:id' element={<Provider />} />
                    <Route path='provider/:id/addPatient' element={<AddPatientForm />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main
