import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Row } from 'reactstrap';

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [submitted, setSubmitted] = useState(false)


    const resetForm = () => {
        setUsername('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setSpecialty('')
    }

    // clear the form when the user clicks the submit button
    useEffect(() => {
        if (submitted) {
            resetForm()
        }
    }, [submitted])

    // make a post request to create a new user
    // when the username and password have been set by the user
    
    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/providers/register', {
            username,
            password,
            firstName,
            lastName,
            specialty
        })
        .then(response => {
            console.log(response)
            // if registration is successful, set submitted to true and redirect to login page
            // if (response.data) {
            //     setSubmitted(true)
                window.location.href = '/login';
            // } else {
            //     console.log('Registration failed')
            // }
            // reset form
            // setUsername('')
            // setPassword('')
            // setFirstName('')
            // setLastName('')
            // setSpecialty('')
            setSubmitted(true)
            console.log('Registration successful')
        })
        .catch(error => {
            console.log("registration error", error);
            console.log('Registration failed')
        })
        
    }


    return (
        <div className='container'>
            <h1>Provider Registration</h1>
            <Row className='p-3' style={{border: '2px solid green'}}>
                <form action="" onSubmit={handleSubmit} className='p-3' style={{border: '2px solid green'}}>
                    <div className="row">
                        <div className="form-group col-12 p-2">
                            <input 
                                type="text"
                                className="form-control"
                                htmlFor="username"
                                placeholder="Username"
                                id="username"
                                aria-label="username"
                                onChange={e => setUsername(e.target.value)}
    
                            />
                        </div>
                        <div className="form-group col-12 p-2">
                            <input 
                                type="text"
                                className="form-control"
                                htmlFor="password"
                                placeholder="Password"
                                id="password"
                                aria-label="password"
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>
                        <div className="form-group col-12 p-2">
                            <input 
                                type="text"
                                className="form-control"
                                htmlFor="firstname"
                                placeholder="Firstname"
                                id="firstname"
                                aria-label="firstname"
                                onChange={e => setFirstName(e.target.value)}
                            
                            />
                        </div>
                        <div className="form-group col-12 p-2">
                            <input 
                                type="text"
                                className="form-control"
                                htmlFor="lastname"
                                placeholder="Lastname"
                                id="lastname"
                                aria-label="lastname"
                                onChange={e => setLastName(e.target.value)}

                            />
                        </div>
                        <div className="form-group col-12 p-2">
                            <input 
                                type="text"
                                className="form-control"
                                htmlFor="specialty"
                                placeholder="Specialty"
                                id="specialty"
                                aria-label="specialty"
                                onChange={e => setSpecialty(e.target.value)}
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

export default RegistrationForm