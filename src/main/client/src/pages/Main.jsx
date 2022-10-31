import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Registration from './Registration';
import Login from './Login';
import Provider from './Provider';
import AddPatient from './AddPatient';
import Patient from './Patient';
import AddNote from '../components/AddNote';

const Main = () => {


    return (
        <div>
            <Header />
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Registration />} />
                    <Route path='provider/:id' element={<Provider />} />
                    <Route path='provider/:id/addPatient' element={<AddPatient />} />
                    <Route path='patient/:id' element={<Patient />} />
                    <Route path='patient/:id/addNote' element={<AddNote />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main
