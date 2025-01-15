import React, { useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { saveDestinationAPI } from '../services/allAPI';

const AddDestination = ({ refreshDestinations }) => {
  const [destinationDetails, setDestinationDetails] = useState({
    destinationName: '',
    destinationDescription: '',
    destinationImage: '',
    pinterest: '',
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddDestination = async () => {
    const { destinationName, destinationDescription, destinationImage, pinterest } = destinationDetails;

    if (destinationName && destinationDescription && destinationImage) {
      try {
        if (!pinterest) {
          const pinterestBaseURL = 'https://in.pinterest.com/search/pins/?q=';
          const generatedLink = `${pinterestBaseURL}${destinationName
            .toLowerCase()
            .replace(/ /g, '%20')}&rs=typed`;
          destinationDetails.pinterest = generatedLink;
        }

        const result = await saveDestinationAPI(destinationDetails);

        if (result.status >= 200 && result.status < 300) {
          alert('Destination Added Successfully!');
          handleClose();
          refreshDestinations();
        } else {
          console.error('Error:', result);
        }
      } catch (err) {
        console.error('Error occurred:', err);
      }
    } else {
      alert('Please fill all the mandatory fields!');
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Destination
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Destination Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Destination Name"
              value={destinationDetails.destinationName}
              onChange={(e) =>
                setDestinationDetails({
                  ...destinationDetails,
                  destinationName: e.target.value,
                })
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Destination Description" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Destination Description"
              value={destinationDetails.destinationDescription}
              onChange={(e) =>
                setDestinationDetails({
                  ...destinationDetails,
                  destinationDescription: e.target.value,
                })
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Destination Image URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Destination Image URL"
              value={destinationDetails.destinationImage}
              onChange={(e) =>
                setDestinationDetails({
                  ...destinationDetails,
                  destinationImage: e.target.value,
                })
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Pinterest URL (optional)" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Pinterest URL"
              value={destinationDetails.pinterest}
              onChange={(e) =>
                setDestinationDetails({
                  ...destinationDetails,
                  pinterest: e.target.value,
                })
              }
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddDestination}>
            Add Destination
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddDestination;
