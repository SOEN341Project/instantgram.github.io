import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Photo(){
    return(
        <Modal.Dialog>
        <Modal.Header >
            <Modal.Title>Modal title</Modal.Title>
            
        </Modal.Header>

        <Modal.Body>
            <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    );
}
export default Photo