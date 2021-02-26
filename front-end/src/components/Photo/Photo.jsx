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
  //let { profileImage, userName, postImage } = props;
  //let profileImage = "https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/10/darth-vader.jpg?w=1000&h=600&crop=1";
  //let postImage = "https://cdna.artstation.com/p/assets/images/images/028/506/514/large/derk-elshof-deathstar-01.jpg?1594675093";
  let username = "username";

  return(
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          {username}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="photo-body">
        <Image id="mainImage" src={props.source} fluid />
      </Modal.Body>
      <Modal.Footer id="footer">
        {/*<a id="heart-icon" href={"/pictureLiked"}>
          <HeartIcon/>
  </a>*/}
        <Comments/>
      </Modal.Footer>
    </Modal>
  );
};

export default Photo;
