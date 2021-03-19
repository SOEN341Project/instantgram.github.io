import React from 'react';
import axios from 'axios';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { HomeIcon, Logo } from '../Icons/Icons';

import Post from '../Post/Post';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

const Navigation = (props) => {
  const [postVisibility, setPostVisibility] = React.useState(false);
  const [loginVisibility, setLoginVisibility] = React.useState(false);
  const [registerVisibility, setRegisterVisibility] = React.useState(false);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');

  const logout = () => {
		axios.post("http://localhost:9000/logout", {}, {withCredentials: true})
		.then((response) => {
			console.log(`Success: ${response}`);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});

    window.location.reload();
	};

  const handleSearch = () => {
    if (props.allUsers.includes(searchQuery)) {
      setCurrentUser(searchQuery);
      setSearchQuery('');
    } else {
      setCurrentUser(null);
      setSearchQuery('');
    }
  }
  console.log("Searched user is: " + currentUser);

  return (
    <div id="navbar-container">
      <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="m-auto" inline >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search-bar" disabled={!props.user.username} onChange={(e) => setSearchQuery(e.target.value)} />
            <Button id="search-button" variant="outline-success" onClick={handleSearch} >Go</Button>
          </Form>
          <Nav>
          {props.user.username ? <Nav.Link href="/"><HomeIcon /></Nav.Link> : null}
            <NavDropdown alignRight title={<div id="profile-icon"></div>} id="basic-nav-dropdown">
              {props.user.username ? <NavDropdown.Item href="/">Profile</NavDropdown.Item> : null}
              {props.user.username ? <NavDropdown.Item onClick={() => setPostVisibility(true)}>Post</NavDropdown.Item> : null}
              {props.user.username ? <NavDropdown.Divider /> : null}
              {props.user.username ? null : <NavDropdown.Item onClick={() => setLoginVisibility(true)}>Login</NavDropdown.Item>}
              {props.user.username ? null : <NavDropdown.Item onClick={() => setRegisterVisibility(true)}>Register</NavDropdown.Item>}
              {props.user.username ? <NavDropdown.Item onClick={() => logout()} href="/">Log Out</NavDropdown.Item> : null}
            </NavDropdown>
          </Nav>
      </Navbar>
      <Post
        user={props.user}
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
