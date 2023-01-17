import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container,Form, Button } from 'react-bootstrap';

function UpdateCitizenPage() {
    let { id } = useParams();
    const [citizen, setCitizen] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/citizen/get-citizen/${id}`)
            .then(res => setCitizen(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const updateRequest = {
                name: form.name.value,
                isCitizen: form.isCitizen.value,
                hasDrivingLicense: form.hasDrivingLicense.value
            }
            axios.put(`http://localhost:8080/api/citizen/update-citizen/${id}`, updateRequest)
                .then(res => {
                    setMessage('Successfully update citizen!');
                    setTimeout(() => {
                    navigate('/')
                    }, 2000);
                })
                .catch(err => {
                    setMessage('Error updating citizen, please try again later.');
                });
        }
    };
    return (
        <Container>
            <h2 className='mt-3'>Update Citizen</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={citizen.name} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-2 fw-bold'>Is citizen?</Form.Label>
                    <Form.Select type="select" className='custom-select my-1 mr-sm-2' name="isCitizen" defaultValue={citizen.isCitizen}>
                        <option selected>Choose...</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-2 fw-bold'>Has driving license?</Form.Label>
                    <Form.Select type="select" className='custom-select my-1 mr-sm-2' name="hasDrivingLicense" defaultValue={citizen.hasDrivingLicense}>
                        <option selected>Choose...</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success fw-bold" type="submit" className='mt-2'>
                    Update Citizen
                </Button>
                {message && <p>{message}</p>}
            </Form>
        </Container>
    );
}
export default UpdateCitizenPage;