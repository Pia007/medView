import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Registration from './Registration';
import Login from './Login';
import Provider from './Provider';

const Main = () => {


    return (
        <div>
            <Header />
            <div className='d-flex' style={{width: 'calc(100%-10%'}}>
                {/* <h1>Hello from my app</h1> */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                    {/* define provider route based on id */}
                    <Route path='/provider/:id' element={<Provider />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main
