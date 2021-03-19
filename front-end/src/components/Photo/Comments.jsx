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
    const [photoID,setPhotoID] = React.useState(null);
    const [username,setUsername] = React.useState('Max');
    const [commentList, setCommentList] = React.useState([]);

    const url = 'http://localhost:9000/profile/';

 React.useEffect(() => {
    getUserInfo();
  }, []);
    
  const getUserInfo = () => {
    axios.get(url)
    .then((response) => {
      setUsername(response.data.username);
      console.log(response.data.username);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
  };



    const submitForm = () => {
		const formData = {
            "comment": commentTyped,
            "photoID": photoID,
            "username": username,
        };

        axios.post("http://localhost:9000/postpic/comment", formData)
		.then((response) => {
			console.log(response);
            setUsername(response.data.username);
            setPhotoID(response.data.photoID);
            setCommentTyped(response.data.commentTyped);
            console.log(commentTyped)
            console.log(username)
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
	};

    const resetTextFields = () => {
        setCommentTyped('');
    };

    //methods for adding comments

    const onAddCommentClick = event => {
        setCommentList(commentList.concat(
        <ListGroup.Item id="comment-item">
            <Row md={4}>
                <Col id="userName">{username}</Col>
                <Col xs={6}>{commentTyped}</Col>     
            </Row>
        </ListGroup.Item> 
        ))
    }

 
        return(

            <Form id="comment-form" onEntering={resetTextFields}>
            <Form.Group controlId="comments">

            <ListGroup id="comment-section" props>
                        {commentList}
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
                        onClick = {() => {submitForm();onAddCommentClick();}}
                        >
                        Comment
                    </Button>
               
             </Form.Group>
             </Form>
            
        );
}

export default Comments;