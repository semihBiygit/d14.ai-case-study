import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddCitizen() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = data => {
        axios.post('http://localhost:8080/api/citizen/create-citizen', data)
            .then(response => {
                setMessage('Successfully added citizen!');
                setTimeout(() => {
                navigate('/')
                }, 2000);
            })
            .catch(error => {
                setMessage('Error adding citizen, please try again later.');
            });

        }
    return (
        <Container>
            <h2 className='mt-3'>Add Citizen</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" {...register('name', { required: true })} />
                    {errors.name && <p>This field is required</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-2 fw-bold'>Is citizen?</Form.Label>
                    <Form.Control type="checkbox" className='form-check-input' name="isCitizen" {...register('isCitizen', { required: false })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-2 fw-bold'>Has driving license?</Form.Label>
                    <Form.Control type="checkbox" className='form-check-input' name="hasDrivingLicense" {...register('hasDrivingLicense', { required: false })} />
                </Form.Group>
                <Button variant="success fw-bold" type="submit" className='mt-3'>
                    Create Citizen
                </Button>
                {message && <p>{message}</p>}
            </Form>
        </Container>
    );
}

export default AddCitizen;
