import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ModalSizes() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [fullShow, setFullShow] = useState(false);

    return (
        <>
        <Button onClick={() => setSmShow(true)} className="mr-3" variant="secondary">Small modal</Button>
        <Button onClick={() => setLgShow(true)} className="mr-3" variant="secondary">Large modal</Button>
        <Button onClick={() => setFullShow(true)} variant="secondary">Full Screen</Button>

        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
  
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>

        <Modal
        size=""
        show={fullShow}
        onHide={() => setFullShow(false)}
        dialogClassName="modal-full"
        aria-labelledby="example-custom-modal-styling-fullscreen"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-fullscreen">
            Full Screen
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
      </>
    );
  }
  
export default ModalSizes;