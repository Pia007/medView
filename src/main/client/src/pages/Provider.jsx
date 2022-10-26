import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Provider = () => {
    const { id } = useParams();

    const [provider, setProvider] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/providers/${id}`)
        .then(response => {
            console.log("This is the response: ", response)
            const data = response.data
            const provider = data
            setProvider(provider)
            console.log("This is the provider object: ", data)
            console.log('this is the provider: ', provider)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
            setError(error)
            setLoading(false)
        })
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <h1>Provider</h1>
            <h2>{provider.firstName}</h2>
        </div>
    )
}

export default Provider