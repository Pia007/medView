import React, { useRef, useState, useEffect } from 'react';
import { Route, Link} from 'react-router-dom';
import axios from '../api/AxiosApi';
import { Row, Card } from 'reactstrap';

const LOGIN_URL = '/providers/login'



const LoginForm = () => {

    // send the value of isLoggedIn to the parent component
    const [loggedIn, setLoggedIn] = useState();


    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [ provider, setProvider ] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [providerId, setProviderId] = useState(null)
    
    

    useEffect(() => {
        usernameRef.current.focus();  
    }, [])

    useEffect(() => {
        setError('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const login = await axios.post(LOGIN_URL, {
                username,
                password,
            });
            console.log(login.data);
            console.log(JSON.stringify(login.data));
            console.log(login.data)
            const id = login.data[0];
            console.log(id);
            setProviderId(id);

            console.log(providerId);
            
            setLoggedIn(true);
            console.log("loggin is good")
            
            window.location.href = '/provider/' + id;
            
            setUsername('');
            setPassword('');
            setLoggedIn(true);

            // isLoggedIn={loggedIn}

            console.log('logged in')

            
        } catch ( error ) {
            if (!error?.response) {
                setError('Network error');
            } else if (error.response?.status === 400) {
                setError('Invalid username or password');
            } else if (error.response?.status === 401) {
                setError('Not authorized');
            } else {
                setError('Login failed');
            }
            errorRef.current.focus();
            setLoggedIn(false);
            // isLoggedIn={loggedIn}

        }
    }
    

    return (
        <>
            <section className='row m-auto p-3 justify-content-around'>
                <p ref={errorRef} className={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                
                <h1 className='text-center'>Login</h1>
                <Card className='col-12 col-md-10 col-lg-8  p-2 login-card mt-2 hv-center align-self-center'>
                    <form onSubmit={handleSubmit} className='p-3'>
                        <Row>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='username'>Username:</label>
                                <input
                                    type='text'
                                    id='username'
                                    ref={usernameRef}
                                    value={username}
                                    className='form-control'
                                    aria-label='username'
                                    required
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='password'>Password:</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className='form-control'
                                    required
                                    autoComplete='off'
                                />
                            </div>
                        </Row>
                        <div className='form-group col-12 p-2 text-center'>
                            <button type='submit' className='btn btn-primary' >Login</button>
                        </div>
                        <p className='text-center'>
                            Don't have an account? <Link to='/register'> Register here.</Link>
                        </p>
                    </form>
                </Card>
            </section>
        </>
    )
}

export default LoginForm;