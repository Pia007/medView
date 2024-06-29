import { Routes, Route, useLocation} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Registration from './Registration';
import Login from './Login';
import Provider from './Provider';
import AddPatient from './AddPatient';
import Patient from './Patient';
import Protected from '../utils/ProtectedRoute';


const Main = () => {

    const RenderHeader = () => {
        const location = useLocation();
        return location.pathname === '/' ? null : <Header />
    }

    return (
        <div className='main'>
            <RenderHeader />
            <div className='main-inner d-flex flex-column justify-content-around'>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='register' element={<Registration />} />
                    <Route path='login/' element={<Login />} />
                    <Route path='provider/:id' element={
                        <Protected>     
                            <Provider />
                        </Protected>} 
                    />
                    <Route path='provider/:id/addpatient' element={
                        <Protected>
                            <AddPatient />
                        </Protected>} 
                    />
                    <Route path='patient/:id' element={
                        <Protected>
                            <Patient />
                        </Protected>} 
                    />
                </Routes>
            </div>
        </div>
    )
}

export default Main
