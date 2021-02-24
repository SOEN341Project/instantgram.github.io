import React from 'react';
import { HomeIcon, Logo } from '../Icons/Icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Post from '../Post/Post';
import './Navigation.css';

const Navigation = (props) => {
  const [postVisibility, setPostVisibility] = React.useState(false);
  return (
    <div id="navbar-container">
      <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="#profile"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="m-auto" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search-bar" />
            <Button id="search-button" variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#home"><HomeIcon /></Nav.Link>
            <NavDropdown alignRight title={<div id="profile-icon"></div>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#post" onClick={() => setPostVisibility(true)}>Post</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
      <Post
        show={postVisibility}
        onHide={() => setPostVisibility(false)}
      />
    </div>
  );
};

export default Navigation;
