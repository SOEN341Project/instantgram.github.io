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

const Navigation = (props) => {
  const [postVisibility, setPostVisibility] = React.useState(false);
  const [loginVisibility, setLoginVisibility] = React.useState(false);
  const [registerVisibility, setRegisterVisibility] = React.useState(false);

  return (
    <div id="navbar-container">
      <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="m-auto" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search-bar" />
            <Button id="search-button" variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="/"><HomeIcon /></Nav.Link>
            <NavDropdown alignRight title={<div id="profile-icon"></div>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setPostVisibility(true)}>Post</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setRegisterVisibility(true)}>Register</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLoginVisibility(true)}>Login</NavDropdown.Item>
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
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
