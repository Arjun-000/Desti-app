import React, { useEffect, useState } from "react";
import {
  addDestinationToVisitedAPI,
  addToWishlistAPI,
  deleteDestinationAPI,
  getDestinationAPI,
  getDestinationByIdAPI,
} from "../services/allAPI";

import { Button, Card, Modal } from "react-bootstrap";

const DestinationCard = () => {
  const [allDestinations, setAllDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getAllDestinations();
  }, []);

  const getAllDestinations = async () => {
    try {
      const result = await getDestinationAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllDestinations(result.data);
      } else {
        console.error("API call failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowDetails = async (id) => {
    try {
      const result = await getDestinationByIdAPI(id);
      if (result.status >= 200 && result.status < 300) {
        setSelectedDestination(result.data);
        setShow(true);
      } else {
        console.error("Failed to fetch destination details");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const removeDestination = async (id) => {
    try {
      await deleteDestinationAPI(id);
      getAllDestinations();
    } catch (err) {
      console.error("Failed to delete destination");
    }
  };
  const addToWishlist = async (id) => {
    try {
      const destinationToAdd = allDestinations.find((dest) => dest.id === id);
      if (!destinationToAdd) {
        console.error("Destination not found!");
        return;
      }
      const result = await addToWishlistAPI(destinationToAdd);
      
      if (result.status >= 200 && result.status < 300) {
        await deleteDestinationAPI(id);
        alert("Added to wishlist successfully");
        setAllDestinations((prev) => prev.filter((dest) => dest.id !== id));
      }
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };
  
  const addToVisited = async (id) => {
    try {
      const destinationToAdd = allDestinations.find((dest) => dest.id === id);
      if (!destinationToAdd) {
        console.error("Destination not found!");
        return;
      }
      const result = await addDestinationToVisitedAPI(destinationToAdd);
      if (result.status >= 200 && result.status < 300) {

        await deleteDestinationAPI(id);
        alert("Added to Visited successfully");
        setAllDestinations((prev) => prev.filter((dest) => dest.id !== id));
      }
    } catch (err) {
      console.error("Error adding to visited:", err);
    }
  };
  
  
  

  return (
    <div className="row mx-3 mt-4 py-4">
      {allDestinations?.length > 0 ? (
        allDestinations.map((destination) => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <img
                  src={destination.destinationImage}
                  alt="Destination"
                  width="100%"
                  onClick={() => handleShowDetails(destination.id)}
                  style={{ cursor: "pointer" }}
                />
                <Card.Title>{destination.destinationName}</Card.Title>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => removeDestination(destination.id)}
                    className="text-danger border-0 bg-transparent btn"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Button onClick={()=>addToVisited(destination.id)}>Visited</Button>
                  <Button onClick={()=>addToWishlist(destination.id)} variant="success">Wishlist</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <div className="justify-content-center align-items-center d-flex">
              <h1>No destinations</h1>
              </div>
      )}

      {/* Modal for Destination Details */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Destination Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDestination ? (
            <div>
              <img
                src={selectedDestination.destinationImage}
                alt="Destination"
                width="100%"
              />
              <h4>{selectedDestination.destinationName}</h4>
              <p>{selectedDestination.destinationDescription}</p>
              <p>
                <strong>Pinterest:</strong>{" "}
                <a
                  href={selectedDestination.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Pinterest
                </a>
              </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
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
