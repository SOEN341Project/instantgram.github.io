import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './Post.css';

const Post = (props) => {
    const img = "https://media.npr.org/assets/img/2015/02/03/globe_west_2048_sq-3c11e252772de81daba7366935eb7bd4512036b8.jpg";
    let userID;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post a Photo
                </Modal.Title>
            </Modal.Header>
            <Form action={"http://localhost:3000/postpic/" + userID} method="post" onSubmit={""}>
                <Form.Group role="form">
                    <Modal.Body id="post-container">
                        <Form.File accept="image/*" name="photo-post" id="formcheck-api-custom" custom>
                            <Form.File.Input isValid={false} isInvalid={false}/>
                            <Form.File.Label data-browse="Browse">
                                Choose a photo (jpg)
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">Done!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Error!</Form.Control.Feedback>
                        </Form.File>
                        {/*<Image src={img} id="photo-preview" rounded />*/}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="secondary" disabled={false} onClick={props.onHide}>Post</Button>
                    </Modal.Footer>
                </Form.Group>
            </Form>
      </Modal>
    );
}

export default Post;
