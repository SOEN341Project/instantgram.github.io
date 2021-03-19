import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [person, setPerson] = useState();

    const submitForm = () => {
		props.onHide();
		const formData = {
            "username": username,
            "password": password
        };
		
		axios.post("http://localhost:9000/login/", formData, {withCredentials: true})
		.then((response) => {
			console.log(response);
            setPerson(response.data.username);
            //alert(person);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
        
        window.location.reload();
	};

    const resetTextFields = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} onEntering={resetTextFields} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
			<Modal.Body id="post-container">
				<Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
				</Form>
			</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={submitForm}>Login</Button>
            </Modal.Footer>
      	</Modal>
    );
}

export default Login;
