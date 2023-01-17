import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="text-center m-3"as={Link} to="/" >Citizen Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-center">
                    <Nav.Link as={Link} to="/add-citizen">Add Citizen</Nav.Link>
                    <Nav.Link as={Link} to="/add-children">Add Children</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;
