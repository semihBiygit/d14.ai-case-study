import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button,Container } from 'react-bootstrap';


function DeleteCitizenPage() {
    let { id } = useParams();
    const [isDeleted, setIsDeleted] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/citizen/delete-citizen/${id}`)
            .then(res => {
                setIsDeleted(true);
                setMessage('Successfully deleted citizen!');
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch(err => {
                setMessage('Error updating citizen, please try again later.');
                console.log(err);
            });
    }
    const handleDontDelete = () => {
        setIsDeleted(false);
        navigate('/');
    }

    return (
        <Container>
            {isDeleted ? (
                <p>Citizen deleted</p>
            ) : (
                <>
                    <div className="text-center mt-3">
                        <h3 >Are you sure you want to delete this citizen?</h3>
                        <Button variant="outline-danger fw-bold" className="text-center m-2" onClick={handleDelete}>Delete</Button>
                        <Button variant="outline-success fw-bold" className="text-center m-2" onClick={handleDontDelete}>Don't Delete</Button>
                        {message && <p>{message}</p>}

                    </div>

                </>

            )}
        </Container>
    );
}

export default DeleteCitizenPage;
