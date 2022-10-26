import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const resetForm = () => {
        setUsername('')
        setPassword('')
    }

      // clear the form when the user clicks the submit button
    useEffect(() => {
        if (loggedIn) {
            resetForm()
        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/providers/login', {
            username,
            password
        })
        .then(response => {
            console.log(response)
            setLoggedIn(true)
        })
        .catch(error => {
            console.log("login error", error)
        })

    }


    return (
        <div className='container'>
            <h1>Provider Login</h1>
            <Row className='p-3' style={{border: '2px solid green'}}>
                <form action="" onSubmit={handleSubmit} className='p-3' style={{border: '2px solid green'}}>
                    <div className="row">
                        <div className='form-group col-12 p-2'>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="form-control"
                                aria-label='username'
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='form-group col-12 p-2'>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="form-control"
                                aria-label='password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group col-12 p-2">
                        <button type="submit" className="btn btn-primary" >Register</button>
                    </div>
                </form>
            </Row>
        </div>
    )
}

export default LoginForm;