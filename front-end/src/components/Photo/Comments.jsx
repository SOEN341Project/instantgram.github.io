import React, {useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
import './Comments.css'

const Comments = (props) => {

    const [commentTyped, setCommentTyped] = React.useState('');
    const [photoID,setPhotoID] = React.useState();
    const [username,setUsername] = React.useState();
    const [commentList, setCommentList] = React.useState([]);

    const url = 'http://localhost:9000/profile/';

 React.useEffect(() => {
    setUsername(props.user.username);
    setPhotoID(props.photoID);
  }, []);


//send comment data to backend

const submitForm = () => {
    const formData = {
    "fromUser" : username,
    "comment": commentTyped,
    "picId" : photoID
    };
    
    axios.post("http://localhost:9000/postpic/comment", formData)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
};

//retrieve comment data from backend

    const resetTextFields = () => {
        setCommentTyped('');
    };

    //methods for adding comments

    const onLoadComments = event => {
        setCommentList(commentList.concat(
        <ListGroup.Item id="comment-item">
            <Row md={4}>
                <Col id="userName">{username}</Col>
                <Col xs={6}>{commentTyped}</Col>     
            </Row>
        </ListGroup.Item> 
        ))
        console.log('comments:'+photoID);
    }

    const createCommentStructure = props.commentList.map(comment => (
        <ListGroup.Item id="comment-item">
            <Row md={4}>
                <Col id="userName">{comment.commentFrom}</Col>
                <Col xs={6}>{comment.commentText}</Col>     
            </Row>
        </ListGroup.Item> ));



        return(

            <Form id="comment-form" onEntering={resetTextFields}>
            <Form.Group controlId="comments">

            <ListGroup id="comment-section" props>
                {createCommentStructure}
            </ListGroup>

                <Form.Control 
                    type="text" 
                    placeholder="Leave a comment" 
                    value={commentTyped} 
                    onChange ={(e) => setCommentTyped(e.target.value)}
                />
                    <Button
                        variant="primary" 
                        id="commentButton"
                        onClick = {() => {submitForm();}}
                        >
                        Comment
                    </Button>
               
             </Form.Group>
             </Form>
            
        );
}

export default Comments;