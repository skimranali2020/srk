import React, { useState } from 'react';
import '../css/Bus.css';

export default function Bus() {
  // State for search form inputs
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to handle search or API call
    console.log({
      pickupLocation,
      dropoffLocation,
      travelDate,
      passengers,
    });
  };

  return (
    <div className="bus-page">
      <div className="bus-search-container">
        <h1 className="header-title">Book Your Bus Ticket</h1>
        <form className="bus-search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location</label>
            <input
              type="text"
              id="pickupLocation"
              placeholder="Enter Pickup Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dropoffLocation">Drop-off Location</label>
            <input
              type="text"
              id="dropoffLocation"
              placeholder="Enter Drop-off Location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelDate">Travel Date</label>
            <input
              type="date"
              id="travelDate"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
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

          <button type="submit" className="btn search-btn">Search Buses</button>
        </form>
      </div>

      <div className="bus-results">
        <h2 className="results-title">Available Buses</h2>
        <p className="no-results">No buses available yet. Please use the form to search for buses.</p>
      </div>
    </div>
  );
}
