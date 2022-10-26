import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Row } from 'reactstrap';

const LoginForm = () => {
    // const { register, handleSubmit, reset, errors } = useForm();
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [providerId, setProviderId] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    const resetForm = () => {
        setUsername(null)
        setPassword(null)
        console.log('Form reset');
    }

      // clear the form when the user clicks the submit button
    useEffect(() => {
        if (loggedIn) {
            // resetForm()
            // redirect to provider page


        }
    }, [loggedIn])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/providers/login', {
            username,
            password
        })
        .then(response => {
            if (response.data) {
                const data = response.data
                console.log(response.data)
                const providerId = data[1]
                setProviderId(providerId)
                console.log(providerId)
            
                    setLoggedIn(true)
                    resetForm()
                    // redirect to provider page
                    window.location.href = `/provider/${providerId}`
            } else {
                console.log('Login failed')
            }
            // const data = response.data
            // const providerId = data[1]
            // console.log(providerId)
            // console.log(providerId)
            // console.log('This is the response', response)
            // setTimeout(() => {
            //     setLoggedIn(true)
            //     resetForm()
            // }, 1000)
            
            // setLoggedIn(true)

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
                                required
                                onChange={e => setUsername(e.target.value)}

                                // {...register('username', {
                                //     required: {
                                //         value: true,
                                //         message: 'Username is required'
                                //     }
                                // })}
                            />
                        </div>
                        {/* {errors.username && <span className='text-danger text-small d-block mb-2'>{errors.username.message}</span>} */}

                        <div className='form-group col-12 p-2'>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="form-control"
                                aria-label='password'
                                required
                                onChange={e => setPassword(e.target.value)}

                                // {...register('password', {
                                //     required: {
                                //         value: true,
                                //         message: 'Password is required'
                                //     }
                                // })}
                            />
                        </div>
                        {/* {errors.password && <span className='text-danger text-small d-block mb-2'>{errors.password.message}</span>} */}
                    </div>
                    <div className="form-group col-12 p-2">
                        <button type="submit" className="btn btn-primary" >Login</button>
                    </div>
                </form>
            </Row>
        </div>
    )
}

export default LoginForm;