import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`/api/cars/${id}`)  // Replace with your backend API endpoint
      .then(response => {
        setCar(response.data);
      })
      .catch(error => {
        console.error('Error fetching car details:', error);
      });
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Price: ${car.price}</p>
      <p>Range: {car.range} miles</p>
      {/* Add more car details here */}
    </div>
  );
}

export default CarDetails;
