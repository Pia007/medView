/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from '../api/AxiosApi';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Card, Button } from 'reactstrap';
import { Fade } from 'react-reveal';

const LOGIN_URL = '/providers/login'


const LoginForm = () => {

    const navigate = useNavigate();

    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(LOGIN_URL, 
            {
                username,
                password,
            }
        )
        .then((response) => {
            console.log("Status: ", response.status)
            console.log("Message: ", response.message)
            console.log("Data: ", response.data)
            
            if (response.status === 200 && response.data[0] === 'Invalid Provider username or password') {
                setErr(response.data);
                setSuccess(false);
                console.log('NOT SUCCESSFUL');
            } else if ( response.status === 200 && response.data[0] === 'Invalid password') {
                setErr(response.data);
                setSuccess(false);
                console.log('NOT SUCCESSFUL');
            } else  {
                // console.log(response.data);
                // console.log(response.data[0]);
                
                setProviderId(response.data[0]);
                const id = response.data[0];

                setUsername('');
                setPassword('');
                localStorage.setItem('username', response.data[2]);
                navigate(`/provider/${id}`);
            }
        })
    }
    

    return (
        <>
            <section className='row m-auto p-3 justify-content-around m-5 login-section '>
                <Card className='col-12 col-md-10 col-lg-8 p-2 login-card mt-2 align-self-center my-5'>
                    <h1 className='text-left p-2 mb-0 form-title'>Login</h1>
                    <h2 className='text-left p-2 mb-0 form-st'>
                        Don't have an account? <Link to='/register' className='text-decoration-none form-link'> Create one </Link>here.
                    </h2>
                    <form onSubmit={handleSubmit} className='p-3'>
                        <span ref={errorRef} className={err? 'error' : 'offscreen'} aria-live='assertive'>
                            <FontAwesomeIcon icon={faInfoCircle} /> {err}
                        </span>
                        
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
                            >Login </Button>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    )
}

export default LoginForm;