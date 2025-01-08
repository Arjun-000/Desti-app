import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddDestination = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* Modal to Add Destinations */}
      <Button variant="primary" onClick={handleShow}>
        Add Destinations
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Deastination!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter Destination Name..." />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Image URL"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter Destination Image URL..." />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Pintrest URL (Optional)"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter Destination Pintrest URL..." />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddDestination;
