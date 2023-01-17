import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddChildren = () => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = data => {
        axios.post('http://localhost:8080/api/citizen/create-child', data)
            .then(response => {
                setMessage('Successfully added child!');
                navigate('/')
            })
            .catch(error => {
                setMessage('Error adding child, please try again later.');
            });
    }

    return (
        <Container>
            <h2 className='mt-3'>Add Children</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" {...register('name', { required: true })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-2 fw-bold'>Parent ID</Form.Label>
                    <Form.Control name="parentId" type="number" placeholder="Enter parent ID" {...register('parentId', { required: true })} />
                </Form.Group>
                <Button variant="success fw-bold" type="submit" className='mt-3'>
                    Add Child
                </Button>
            </Form>
            {message && <p>{message}</p>}
        </Container>
    );
}

export default AddChildren;
