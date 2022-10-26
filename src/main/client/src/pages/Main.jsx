import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import Provider from './Provider';

const Main = () => {




    const ProviderWithId = ({id}) => {

        return (
            <Provider id={id} />
        )
    }



    return (
        <div>
            <Header />
            <div className=''>
                <h1>Hello from my app</h1>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/register' element={<RegistrationForm />} />
                    {/* define provider route based on id */}
                    <Route path='/provider/:id' element={<Provider />} />
                </Routes>
    
                
            </div>
        </div>
    )
}

export default Main
