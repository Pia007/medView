import React, { useRef, useState, useEffect } from 'react';
import axios from '../api/AxiosApi';
// import axios from 'axios';
import { Row, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const LOGIN_URL = '/providers/login'

const LoginForm = () => {
    const usernameRef = useRef();
    const errorRef = useRef();

    // const { register, handleSubmit, reset, errors } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [providerId, setProviderId] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

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
                const id = login.data[1];
                
                    window.location.href = '/provider/' + id;

                setUsername('');
                setPassword('');
                setLoggedIn(true)
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
        }
    }
    

    return (
        <>
            <section>
                <p ref={errorRef} className={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                
                <h1>Login</h1>
                <Card className='col-12 col-md-10 col-lg-8  p-2 login-card mt-2 hv-center align-self-center'>
                    <form onSubmit={handleSubmit} className='p-3'>
                        <Row>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='username'>Username:</label>
                                <input
                                    type='text'
                                    // name='username'
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
                            {/* disabled={!validUsername || !validPassword || !validMatch || !validFirstName || !validLastName || !validSpecialty ? true: false}   */}
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