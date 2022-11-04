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
import Protected from '../ProtectedRoute';


const Main = () => {

    return (
        <div>
            <Header  />
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    
                    <Route path='register' element={<Registration />} />
                    {/* protect the provider route with its id  */}
                    <Route path='login/' element={<Login />} />
                    <Route path='provider/:id' element={<Protected><Provider /></Protected>} />
                    <Route path='provider/:id/addpatient' element={<Protected><AddPatient /></Protected>} />
                    <Route path='patient/:id' element={<Protected><Patient /></Protected>} />

                    {/* <Route path='provider/:id/addPatient' element={<AddPatient />} />
                    <Route path='patient/:id' element={<Patient />} /> */}
                    
                </Routes>
            <Footer />
        </div>
    )
}

export default Main
