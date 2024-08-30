import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/api/cars')  // Replace with your backend API endpoint
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
