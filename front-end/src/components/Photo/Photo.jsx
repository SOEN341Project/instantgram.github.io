import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Photo.css'
import { HeartIcon, ActiveHeartIcon } from '../Icons/Icons';
import Comments from './Comments';

function Photo(props){
  let { profileImage, userName, postImage } = props;
  profileImage = "https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/10/darth-vader.jpg?w=1000&h=600&crop=1";
  postImage = "https://cdna.artstation.com/p/assets/images/images/028/506/514/large/derk-elshof-deathstar-01.jpg?1594675093";
  userName = "username";

  return(
    <Modal.Dialog>
    <Modal.Header >
    <Container>
        <Row>
          <Col xs={2} md={3}>
          <Image id="profile-image" src={profileImage} roundedCircle href={"profileImage"}/>
          </Col>
          <Col xs={6} md={4}>
              <p1 id="photo-username"> 
                {userName}
            </p1>
          </Col>
        </Row>
    </Container>
    </Modal.Header>

    <Modal.Body id="photo-body">
      <Image id="mainImage" src={postImage} fluid />
    </Modal.Body>

    <Modal.Footer>
    <a id="heart-icon" href={"pictureLiked"}>
      <HeartIcon/>
    </a>
    <Comments/>  
    </Modal.Footer>
    </Modal.Dialog>
  );
}
export default Photo
