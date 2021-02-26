import React, {useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Comments.css'

const Comments = () => {

    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value),
        onFormSubmit = e => {
          e.preventDefault()
          console.log(value)
          setValue()
        }
 
        return(
                    <Form id="comment-form" onSubmit={onFormSubmit}>
                        <Form.Group controlId="comments">
                             <Form.Control 
                                type="text" 
                                placeholder="Leave a comment" 
                                onChange ={onInput}
                                value={value}  
                             />
                             <Button
                                variant="primary" 
                                type="submit" 
                                id="commentButton"
                                >
                                Comment
                            </Button>
                        </Form.Group>
                    </Form>
        );
}

export default Comments;