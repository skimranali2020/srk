import React, { useState } from 'react';
import '../css/Trains.css';

export default function Trains() {
  // State for search form inputs
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to handle search or API call
    console.log({
      source,
      destination,
      departureDate,
      passengers,
    });
  };

  return (
    <div className="trains-page">
      <div className="train-search-container">
        <h1 className="header-title">Book Your Train Tickets</h1>
        <form className="train-search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="source">From</label>
            <input
              type="text"
              id="source"
              placeholder="Enter Source Station"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">To</label>
            <input
              type="text"
              id="destination"
              placeholder="Enter Destination Station"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="passengers">Passengers</label>
            <input
              type="number"
              id="passengers"
              min="1"
              max="10"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>

          <button type="submit" className="btn search-btn">Search Trains</button>
        </form>
      </div>

      <div className="train-results">
        <h2 className="results-title">Available Trains</h2>
        <p className="no-results">No trains available yet. Please use the form to search for trains.</p>
      </div>
    </div>
  );
}
