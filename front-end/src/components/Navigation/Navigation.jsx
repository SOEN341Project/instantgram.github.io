import React from 'react';
import { HomeIcon, Logo } from '../Icons/Icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Post from '../Post/Post';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import './Navigation.css';
import axios from 'axios';

const Navigation = (props) => {
  const [postVisibility, setPostVisibility] = React.useState(false);
  const [loginVisibility, setLoginVisibility] = React.useState(false);
  const [registerVisibility, setRegisterVisibility] = React.useState(false);

  const logout = () => {
		axios.post("http://localhost:9000/logout", {}, {withCredentials: true})
		.then((response) => {
			console.log(`Success: ${response}`);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
	};

  return (
    <div id="navbar-container">
      <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="m-auto" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search-bar" disabled={!props.loggedIn} />
            <Button id="search-button" variant="outline-success">Search</Button>
          </Form>
          <Nav>
          {props.loggedIn ? <Nav.Link href="/"><HomeIcon /></Nav.Link> : null}
            <NavDropdown alignRight title={<div id="profile-icon"></div>} id="basic-nav-dropdown">
              {props.loggedIn ? <NavDropdown.Item href="/">Profile</NavDropdown.Item> : null}
              {props.loggedIn ? <NavDropdown.Item onClick={() => setPostVisibility(true)}>Post</NavDropdown.Item> : null}
              {props.loggedIn ? <NavDropdown.Divider /> : null}
              {props.loggedIn ? null : <NavDropdown.Item onClick={() => setLoginVisibility(true)}>Login</NavDropdown.Item>}
              {props.loggedIn ? null : <NavDropdown.Item onClick={() => setRegisterVisibility(true)}>Register</NavDropdown.Item>}
              {props.loggedIn ? <NavDropdown.Item onClick={() => logout()} href="/">Log Out</NavDropdown.Item> : null}
            </NavDropdown>
          </Nav>
      </Navbar>
      <Post
        show={postVisibility}
        onHide={() => setPostVisibility(false)}
      />
      <Login
        show={loginVisibility}
        onHide={() => setLoginVisibility(false)}
      />
      <Registration
        show={registerVisibility}
        onHide={() => setRegisterVisibility(false)}
      />
    </div>
  );
};

export default Navigation;
