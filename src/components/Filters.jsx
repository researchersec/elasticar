import React from 'react';

function Filters({ onFilterChange }) {
  return (
    <div>
      <h2>Filters</h2>
      {/* Example filters */}
      <div>
        <label>Price Range: </label>
        <select onChange={(e) => onFilterChange('price', e.target.value)}>
          <option value="any">Any</option>
          <option value="under-30k">Under $30,000</option>
          <option value="30k-50k">$30,000 - $50,000</option>
          <option value="over-50k">Over $50,000</option>
        </select>
      </div>
      {/* Add more filters as needed */}
    </div>
  );
}

export default Filters;
