import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function VerticallyCenteredModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="secondary" onClick={handleShow}>
            Launch Vertically Centered demo modal
        </Button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Centered Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          This text is in the middle of the screen!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="tertiary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
export default VerticallyCenteredModal