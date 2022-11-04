import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../api/AxiosApi';
import { Row, Col, Card, Button } from 'reactstrap';

const LOGIN_URL = '/providers/login'


const LoginForm = () => {

    const navigate = useNavigate();


    // send the value of isLoggedIn to the parent component
    const [loggedIn, setLoggedIn] = useState();


    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [ provider, setProvider ] = useState();
    const [err, setErr] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [providerId, setProviderId] = useState(null)
    
    

    useEffect(() => {
        usernameRef.current.focus();  
    }, [])

    useEffect(() => {
        setErr('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const login = await axios.post(LOGIN_URL, 
                {
                    username,
                    password,
                }
            );

            setProviderId(login.data[0]);
            
            const id = login.data[0];
            
            console.log(providerId);
            
            setLoggedIn(true);
            console.log("loggin is good")

            // save the username to local storage
            localStorage.setItem('username', JSON.stringify(login.data[1]));
            // navigate(`/provider/${id}`);
            navigate(`/provider/${id}`);
            
            setUsername('');
            setPassword('');
            setLoggedIn(true);
            
        } catch ( error ) {
            if (!error?.response) {
                setErr('Login Failed. Please try again.');
            } else if (error.response?.status === 400) {
                setErr('Invalid username or password');
            } else if (error.response?.status === 401) {
                setErr('Not authorized');
            } else {
                setErr('Login failed');
            }
            errorRef.current.focus();
            setLoggedIn(false);
        }
    }
    

    return (
        <>
            <section className='row m-auto p-3 justify-content-around m-5 login-section'>
                <Card className='col-12 col-md-10 col-lg-8 p-2 login-card mt-2 align-self-center my-5'>
                    <h1 className='text-left p-2 mb-0 form-title'>Sign in</h1>
                    <h2 className='text-left p-2 mb-0 form-st'>
                        Don't have an account? <Link to='/register' className='text-decoration-none form-link'> Create one </Link>here.
                    </h2>
                    <form onSubmit={handleSubmit} className='p-3'>
                        <p ref={errorRef} className={err ? 'error' : 'offscreen'} aria-live='assertive'>{err}
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                        </p>
                        <Row>
                            <div className='form-group col-12 p-2'>
                                <label htmlFor='username'>Username</label>
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
                                <label htmlFor='password'>Password</label>
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
                            <Button type='submit' className='col-8 col-sm-6 col-md-4 form-btn' 
                                color='primary'
                            >Sign in</Button>
                        </div>
                        
                    </form>
                </Card>
            </section>
        </>
    )
}

export default LoginForm;