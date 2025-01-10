import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getDestinationInWishlistAPI , getDestinationByIdWishlistAPI , deleteDestinationFromWishlistAPI , deleteDestinationFromWishlistToAddVisitedAPI } from '../services/allAPI';


const WishList = () => {
  const [wishlistDestinations, setWishlistDestinations] = useState([]); 
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
  
  useEffect(() => {
    getAllWishlistDestinations();
    }, []);
  
    const getAllWishlistDestinations = async () => {
      try {
        const result = await getDestinationInWishlistAPI();
        if (result.status >= 200 && result.status < 300) {
          setWishlistDestinations(result.data);
        } else {
          console.error("API call failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handleShowDetails = async (id) => {
        try {
          const result = await getDestinationByIdWishlistAPI(id);
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

      const removeFromWishlist = async (id) => {
        try {
          // Find the destination to remove
          const destinationToRemove = wishlistDestinations.find((dest) => dest.id === id);
          if (!destinationToRemove) {
            console.error("Destination not found in wishlist!");
            return;
          }
      
          // Call the updated API
          const result = await deleteDestinationFromWishlistAPI(destinationToRemove);
          if (result.status >= 200 && result.status < 300) {
            alert("Removed from wishlist and added back to destination list");
            // Update the wishlist state
            setWishlistDestinations((prev) => prev.filter((dest) => dest.id !== id));
          } else {
            console.error("Failed to remove destination from wishlist and add back to destination");
          }
        } catch (error) {
          console.error("Error removing from wishlist and adding back:", error);
        }
      };
      

      const moveToVisitedFromWishlist = async (id) => {
        try {
          const destinationToMove = wishlistDestinations.find((dest) => dest.id === id);
          if (!destinationToMove) {
            console.error("Destination not found in wishlist!");
            return;
          }
      
          const result = await deleteDestinationFromWishlistToAddVisitedAPI(destinationToMove);
          if (result.status >= 200 && result.status < 300) {
            alert("Moved to Visited successfully");
            // Remove the destination from the wishlist state
            setWishlistDestinations((prev) => prev.filter((dest) => dest.id !== id));
          } else {
            console.error("Failed to move destination to visited");
          }
        } catch (error) {
          console.error("Error moving destination to visited:", error);
        }
      };
      

  return (
    <div style={{paddingTop:'100px'}} className='container-fluid'>
        <h1>Wishlist</h1>
        <div className="row container mt-4">
            {
              wishlistDestinations?.length>0 ?
              wishlistDestinations.map((destination) => (
              <div className="col-md-4">
            
                <Card style={{ width: '28rem' }}>
          
          <Card.Body>
         <img src={destination.destinationImage} alt="No image" width={'100%'}  onClick={() => handleShowDetails(destination.id)}
                  style={{ cursor: "pointer" }}/>
                     <Card.Title>{destination.destinationName}</Card.Title>
         
            <div className='d-flex justify-content-between'>
                <button onClick={()=>removeFromWishlist(destination.id)} className='text-danger border-0 bg-transparent btn'><i class="fa-solid fa-trash"></i></button>
                <Button onClick={() => moveToVisitedFromWishlist(destination.id)}>Visited</Button>
                
            </div>
          </Card.Body>
        </Card>
           
            </div>
              ))
            :
            <div className="justify-content-center align-items-center d-flex">
              <h1>No destinations in wishlist</h1>
              </div>

            }
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
  )
}

export default WishList