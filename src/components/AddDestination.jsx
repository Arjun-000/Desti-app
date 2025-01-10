import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { getDestinationAPI, saveDestinationAPI } from "../services/allAPI";


const AddDestination = () => {
  const [invalidPinterestLink, setInvalidPinterestLink] = useState(false);
  const [destinationDetails, setDestinationDetails] = useState({
    destinationName: "",
    destinationDescription: "",
    destinationImage: "",
    pinterest: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddDestination = async () => {
    const { destinationName, destinationDescription, destinationImage, pinterest } = destinationDetails;
  
    if (destinationName && destinationDescription && destinationImage) {
      try {
        // Generate Pinterest link if not provided
        if (!pinterest) {
          const pinterestBaseURL = "https://in.pinterest.com/search/pins/?q=";
          const generatedLink = `${pinterestBaseURL}${destinationName
            .toLowerCase()
            .replace(/ /g, "%20")}&rs=typed`;
          destinationDetails.pinterest = generatedLink;
        }
  
        const result = await saveDestinationAPI(destinationDetails);
        console.log(result);
        
        if (result.status >= 200 && result.status < 300) {
          alert("Destination Added Successfully!");
          console.log(result);
          handleClose();
        } else {
          console.log("Error:", result);
        }
      } catch (err) {
        console.error("Error occurred:", err);
      }
    } else {
      alert("Please fill all the mandatory fields!");
    }
  };


  return (
    <div>
      {/* Modal to Add Destinations */}
      <Button variant="primary" onClick={handleShow}>
        Add Destinations
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Destination!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Name"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setDestinationDetails({
                    ...destinationDetails,
                    destinationName: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter Destination Name..."
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Description"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setDestinationDetails({
                    ...destinationDetails,
                    destinationDescription: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter Destination Description..."
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Image URL"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setDestinationDetails({
                    ...destinationDetails,
                    destinationImage: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter Destination Image URL..."
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Destination Pinterest URL (optional)"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setDestinationDetails({
                    ...destinationDetails,
                    pinterest: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter Destination Pinterest URL..."
              />
            </FloatingLabel>
            {invalidPinterestLink && (
              <div className="text-danger fw-bolder">
                Invalid Pinterest Link. Please provide a valid link.
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddDestination} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddDestination;
