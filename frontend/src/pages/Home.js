import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table,Container } from 'react-bootstrap';


function Home() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/citizen/get-citizens')
      .then(res => setCitizens(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <h2 className='mt-3'>Citizen List</h2>
      <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>Name</th>
            <th>ID</th>
            <th>Is citizen?</th>
            <th>Has driving license?</th>
            <th>Children</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {citizens.map(citizen => (
            <tr key={citizen.id}>
              <td>{citizen.name}</td>
              <td>{citizen.id}</td>
              <td>{citizen.isCitizen ? 'Yes' : 'No'}</td>
              <td>{citizen.hasDrivingLicense ? 'Yes' : 'No'}</td>
              <td className='text-center'>
                {citizen.children.length > 0 ? (
                  <Link className='btn btn-secondary m-1' to={`/show-children/${citizen.id}`}>Show</Link>
                ) : (
                  '------'
                )}
              </td>
              <td className='text-center'>
                <Link className="btn btn-outline-success m-1" to={`/update-citizen/${citizen.id}`}>Update</Link>
                <Link className="btn btn-outline-danger m-1" to={`/delete-citizen/${citizen.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
