import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';
import AddDestination from '../components/AddDestination';
import Header from '../components/Header';
import { getDestinationAPI } from '../services/allAPI';

const Destination = () => {
  const [allDestinations, setAllDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const result = await getDestinationAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllDestinations(result.data);
      } else {
        console.error('Failed to fetch destinations');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header outsideHome={true} />
      <div style={{ paddingTop: '100px' }} className="container-fluid">
        <div className="d-flex justify-content-between pe-5">
          <h1>Destinations</h1>
          <AddDestination refreshDestinations={fetchDestinations} />
        </div>
        <DestinationCard
          allDestinations={allDestinations}
          refreshDestinations={fetchDestinations}
        />
      </div>
    </>
  );
};

export default Destination;
