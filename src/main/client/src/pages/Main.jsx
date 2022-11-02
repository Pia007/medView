import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Registration from './Registration';
import Login from './Login';
import Provider from './Provider';
import AddPatient from './AddPatient';
import Patient from './Patient';
import Footer from '../components/Footer';


const Main = () => {

    return (
        <div>
            <Header  />
            <div className='d-flex align-content-around justify-content-center m-6'>
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    
                    <Route path='register' element={<Registration />} />
                    <Route path='login/' element={<Login />} />
                    <Route path='provider/:id' element={<Provider />} />
                    <Route path='provider/:id/addPatient' element={<AddPatient />} />
                    <Route path='patient/:id' element={<Patient />} />
                    
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Main
