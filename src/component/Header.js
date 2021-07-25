import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ToDo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#todo">ToDo</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
