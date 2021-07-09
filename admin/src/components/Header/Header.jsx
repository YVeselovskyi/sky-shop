import React, { useState } from 'react';
import { Navbar, Container,Form, Button, Modal, ModalBody, ModalTitle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="bs-secondary">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <h1>Admin</h1>                           
                    </Navbar.Brand>
                    <Button variant="primary" onClick={handleShow}> Log in</Button>                       
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <ModalTitle>Log in</ModalTitle>   
                </Modal.Header>
                <ModalBody>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                                <Button variant="primary" type="submit">Enter</Button>
                        </Form.Group>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );

};
