import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: left;
`;

function CarCard({ car }) {
  return (
    <Card>
      <h3>{car.make} {car.model}</h3>
      <p>Price: ${car.price}</p>
      <p>Range: {car.range} miles</p>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </Card>
  );
}

export default CarCard;
