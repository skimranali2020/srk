import React, { useState } from 'react';
import '../css/Holidays.css';

export default function Holidays() {
  // State for search form inputs
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to handle search or API call
    console.log({
      destination,
      startDate,
      endDate,
      travelers,
    });
  };

  return (
    <div className="holidays-page">
      <div className="holidays-search-container">
        <h1 className="header-title">Plan Your Perfect Holiday</h1>
        <form className="holidays-search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelers">Number of Travelers</label>
            <input
              type="number"
              id="travelers"
              min="1"
              max="10"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
          </div>

          <button type="submit" className="btn search-btn">Search Holidays</button>
        </form>
      </div>

      <div className="holiday-results">
        <h2 className="results-title">Available Holiday Packages</h2>
        <p className="no-results">No holiday packages available yet. Please use the form to search for packages.</p>
      </div>
    </div>
  );
}
