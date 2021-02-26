import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Photo = (props) => {

    let username = "brian_diesel";

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {username}
                </Modal.Title>
            </Modal.Header>
			<Modal.Body id="post-container">
				<div id="center-image"><img src={props.source} id="image" /></div>
			</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
      	</Modal>
    );
}

export default Photo;
