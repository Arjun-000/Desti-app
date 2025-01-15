import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import {
  deleteDestinationAPI,
  addToWishlistAPI,
  addDestinationToVisitedAPI,
} from '../services/allAPI';

const DestinationCard = ({ allDestinations, refreshDestinations }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const removeDestination = async (id) => {
    try {
      await deleteDestinationAPI(id);
      refreshDestinations();
    } catch (err) {
      console.error('Failed to delete destination:', err);
    }
  };

  const addToWishlist = async (destination) => {
    try {
      await addToWishlistAPI(destination);
      refreshDestinations();
    } catch (err) {
      console.error('Failed to add to wishlist:', err);
    }
  };

  const addToVisited = async (destination) => {
    try {
      await addDestinationToVisitedAPI(destination);
      refreshDestinations();
    } catch (err) {
      console.error('Failed to add to visited:', err);
    }
  };

  return (
    <div className="row mx-3 mt-4 py-4">
      {allDestinations.length > 0 ? (
        allDestinations.map((destination) => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <Card style={{ width: "28rem" }}>
              <Card.Img
                variant="top"
                src={destination.destinationImage}
                onClick={() => {
                  setSelectedDestination(destination);
                  setShow(true);
                }}
                width={"100%"}
              />
              <Card.Body>
                <Card.Title>{destination.destinationName}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={() => removeDestination(destination.id)}>
                    Delete
                  </Button>
                  <Button onClick={() => addToWishlist(destination)}>Wishlist</Button>
                  <Button onClick={() => addToVisited(destination)}>Visited</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <h4>No destinations available</h4>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDestination?.destinationName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedDestination?.destinationImage} alt="Destination" width="100%" />
          <p>{selectedDestination?.destinationDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DestinationCard;
