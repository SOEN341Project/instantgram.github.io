import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegistrationForm = (props) => {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
                <Modal.Header closeButton>
                    <Modal.Title>Register Now</Modal.Title>
                </Modal.Header>
            <Form>
                <Modal.Body>
                        <Form.Group controlId="registrationUsername">
                            <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="registrationPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button type="register" variant="primary" disabled={false} onClick={props.onHide}>Register</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default RegistrationForm;