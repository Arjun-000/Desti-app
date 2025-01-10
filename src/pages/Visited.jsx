import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import {
  getDestinationInVisitedAPI,
  getDestinationByIdVisitedAPI,
  deleteDestinationFromVisitedAPI,
  deleteDestinationFromVisitedToAddWishlistAPI

} from "../services/allAPI";

const Visited = () => {
  const [visitedDestinations, setVisitedDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getAllVisitedDestinations();
  }, []);

  const getAllVisitedDestinations = async () => {
    try {
      const result = await getDestinationInVisitedAPI();
      if (result.status >= 200 && result.status < 300) {
        setVisitedDestinations(result.data);
      } else {
        console.error("API call failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowDetails = async (id) => {
    try {
      const result = await getDestinationByIdVisitedAPI(id);
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

  const removeDestinationFromVisited = async (id) => {
    try {
      // Find the destination details in the visited list
      const destinationToRemove = visitedDestinations.find((dest) => dest.id === id);
      if (!destinationToRemove) {
        console.error("Destination not found in visited list!");
        return;
      }
  
      // Add the destination back to the main destination list
      const result = await deleteDestinationFromVisitedAPI(destinationToRemove);
      if (result.status >= 200 && result.status < 300) {
        alert("Removed from visited");
  
        // Update the visited destinations list
        setVisitedDestinations((prev) => prev.filter((dest) => dest.id !== id));
      } else {
        console.error("Failed to add destination back to main list");
      }
    } catch (error) {
      console.error("Error removing from visited and adding back:", error);
    }
  };

  const moveToWishlistFromVisited = async (id) => {
    const destinationToMove = visitedDestinations.find((dest) => dest.id === id);
    if (!destinationToMove) return;

    await deleteDestinationFromVisitedToAddWishlistAPI(destinationToMove);
    setVisitedDestinations((prev) => prev.filter((dest) => dest.id !== id));
  };
  

  return (
    <div style={{ paddingTop: "100px" }} className="container-fluid">
      <h1>Visited Destinations</h1>
      <div className="row container mt-4">
        {visitedDestinations?.length > 0 ? (
          visitedDestinations.map((destination) => (
            <div className="col-md-4" key={destination.id}>
              <Card style={{ width: "28rem" }}>
                <Card.Body>
                  <img
                    src={destination.destinationImage}
                    alt="No image"
                    width={"100%"}
                    onClick={() => handleShowDetails(destination.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <Card.Title>{destination.destinationName}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <button onClick={() => removeDestinationFromVisited(destination.id)} className="text-danger border-0 bg-transparent btn">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Button onClick={()=>moveToWishlistFromVisited(destination.id)} variant="success">Wishlist</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="justify-content-center align-items-center d-flex">
            <h1>No destinations in visited list</h1>
          </div>
        )}
      </div>

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

export default Visited;
