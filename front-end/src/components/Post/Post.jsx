import React, { useState, useRef } from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Post.css';

const Post = (props) => {
  	const [selectedImage, setSelectedImage] = useState(null);
	const fileInput = useRef(null);
	const [disabled, setDisabled] = useState(true);
	const [userID, setUserID] = useState("333"); //props.username

  	const submitForm = () => {
		props.onHide();
		const formData = new FormData();
		formData.append("picture", selectedImage);
		
		axios.post("http://localhost:9000/postpic/" + userID, formData)
		.then((response) => {
			alert("Image uploaded successfully.");
			console.log(response);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			alert("An error occured while trying to upload the image.");
		});
	};

	const handleOnChange = (e) => {
		setSelectedImage(e.target.files[0]);
		setDisabled(!e.target.files[0]);
	};
	
  	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} onEntering={() => setDisabled(true)} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post a Photo
                </Modal.Title>
            </Modal.Header>
			<Modal.Body id="post-container">
				<form>
					<input type="file" accept=".jpg, .jpeg, .png" onChange={handleOnChange} id="file-upload" />
				</form>
			</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" disabled={disabled} onClick={submitForm}>Post</Button>
            </Modal.Footer>
      	</Modal>
  	);
};

export default Post;
