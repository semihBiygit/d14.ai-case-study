import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';


function ShowChildrenPage() {
    const [children, setChildren] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/citizen/get-children-by-parent-id/${id}`)
            .then(res => setChildren(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>Children List</h1>
            <Table striped bordered hover>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map(child => (
                        <tr key={child.id}>
                            <td>{child.name}</td>
                            <td>{child.id}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </div>
    );
}

export default ShowChildrenPage;
