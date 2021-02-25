import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import './Post.css';

const Post = (props) => {
    const img = "https://media.npr.org/assets/img/2015/02/03/globe_west_2048_sq-3c11e252772de81daba7366935eb7bd4512036b8.jpg";
    let userID;

    const [disabled, setDisabled] = React.useState(true);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const submitForm = () => {
        props.onHide(); //Does this work
        const formData = new FormData();
        formData.append("file", selectedFile);

        axios.post("UPLOAD_URL", formData)
        .then((res) => {
            alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post a Photo
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Group role="form">
                    <Modal.Body id="post-container">
                        <Form.File id="file-upload" onChange={() => setDisabled(!disabled)} />
                        <input
                            type="file"
                            value={selectedFile}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" disabled={disabled} onClick={submitForm}>Post</Button>
                    </Modal.Footer>
                </Form.Group>
            </Form>
      </Modal>
    );
}

export default Post;
