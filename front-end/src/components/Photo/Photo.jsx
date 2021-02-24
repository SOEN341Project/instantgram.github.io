import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Photo.css'

function Photo(){
  return(
    <Modal.Dialog>
    <Modal.Header >
    <Container>
        <Row>
          <Col xs={6} md={4}>
          <Image id="profileImage" src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/10/darth-vader.jpg?w=1000&h=600&crop=1" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            Profile Name
          </Col>
        </Row>
    </Container>
    </Modal.Header>

    <Modal.Body id="photoBody">
      <Image id="mainImage" src="https://cdna.artstation.com/p/assets/images/images/028/506/514/large/derk-elshof-deathstar-01.jpg?1594675093" fluid />
    </Modal.Body>

    <Modal.Footer>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
    </Modal.Footer>
    </Modal.Dialog>
  );
}
export default Photo