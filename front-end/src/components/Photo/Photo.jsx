import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import './Photo.css'
import { HeartIcon, ActiveHeartIcon } from '../Icons/Icons';
import Comments from './Comments';

function Photo(props){
  //let { profileImage, userName, postImage } = props;
  //let profileImage = "https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/10/darth-vader.jpg?w=1000&h=600&crop=1";
  //let postImage = "https://cdna.artstation.com/p/assets/images/images/028/506/514/large/derk-elshof-deathstar-01.jpg?1594675093";
  let username = props.user.username;
  let photoID = props.photoID;
  let comments = props.newestPhoto.comments;
  
  //let commentText = comments.map(commentObject => commentObject.comment.text);
  //let commentFrom = comments.map(commentObject => commentObject.comment.from);

  let comment = comments.map(commentObject => {return ({"commentFrom" : commentObject.comment.from, "commentText" : commentObject.comment.text})});

  console.log("photoid: "+photoID);
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
        <Comments 
        user={props.user} 
        photoID = {photoID}
        commentList = {comment}
       />
      </Modal.Footer>
    </Modal>
  );
};

export default Photo;
