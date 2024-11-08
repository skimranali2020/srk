import React, { useState } from 'react';
import '../css/Hotels.css';

export default function Hotels() {
  // State for search form inputs
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // This is where you'll handle the search logic or API call
    console.log({
      location,
      checkInDate,
      checkOutDate,
      guests,
      rooms,
    });
  };

  return (
    <div className="hotels-page">
      <div className="hotel-search-container">
        <h1 className="header-title">Find the Best Hotels</h1>
        <form className="hotel-search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="location">Destination</label>
            <input
              type="text"
              id="location"
              placeholder="Where do you want to go?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkInDate">Check-In</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="checkOutDate">Check-Out</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rooms">Rooms</label>
            <input
              type="number"
              id="rooms"
              min="1"
              max="5"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>

          <button type="submit" className="btn search-btn">Search Hotels</button>
        </form>
      </div>

      <div className="hotel-results">
        <h2 className="results-title">Available Hotels</h2>
        <p className="no-results">No hotels available yet. Use the form to search for hotels.</p>
      </div>
    </div>
  );
}

