import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './Login.css';
import {Logo} from '../Icons/Icons';

const Login = () => {
    return (
        <div id="form">
            <Form>
                <div id="logo"><Logo /></div>
                
                <div id="inputs">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Username" />
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    <div id="loginbutton">
                        <Button variant="primary" type="submit" id="loginbutton">
                            Log In
                        </Button>
                    </div>
                </div>
                <hr/>

                <p id="signup">Don't have an account? &nbsp;<a href="#Registration"> Sign up</a></p>            
            </Form>
      </div>
    )
}

export default Login
