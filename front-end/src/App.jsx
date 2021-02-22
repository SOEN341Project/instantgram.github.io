import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar/NavBar';
import NavItem from './components/NavBar/NavItem';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NavBar>
              <NavItem type='logo'>Instantgram</NavItem>
              <NavItem type='search'>Search</NavItem>
              <NavItem type='icon'>Profile</NavItem>
            </NavBar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
