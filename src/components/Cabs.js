import React, { useState } from 'react';
import '../css/Cabs.css';

export default function Cabs() {
  // State for search form inputs
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to handle search or API call
    console.log({
      pickupLocation,
      dropoffLocation,
      pickupDate,
      passengers,
    });
  };

  return (
    <div className="cabs-page">
      <div className="cab-search-container">
        <h1 className="header-title">Book Your Cab</h1>
        <form className="cab-search-form" onSubmit={handleSearch}>
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
            <label htmlFor="pickupDate">Pickup Date</label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
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

          <button type="submit" className="btn search-btn">Search Cabs</button>
        </form>
      </div>

      <div className="cab-results">
        <h2 className="results-title">Available Cabs</h2>
        <p className="no-results">No cabs available yet. Please use the form to search for cabs.</p>
      </div>
    </div>
  );
}
