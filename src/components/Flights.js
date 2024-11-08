import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the datepicker
import '../css/Flights.css'; // Assuming your custom styles are in Flights.css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Dropdown } from 'react-bootstrap';

export default function Flights() {
  // State for search form inputs
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(null); // Using Date object
  const [returnDate, setReturnDate] = useState(null); // Using Date object
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [showTravelers, setShowTravelers] = useState(false); // State to toggle the travelers section
  const [selectedClass, setSelectedClass] = useState('Economy'); // State for flight class
  const [flightResults, setFlightResults] = useState([]); // State for storing flight results

  // Handler for form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    
    // This is where you'll call an API or handle the search
    try {
      // Sample API call, replace with your actual API endpoint
      const response = await fetch(`YOUR_API_ENDPOINT`, {
        method: 'POST', // or 'GET', based on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
          departureDate,
          returnDate,
          travelers,
          selectedClass,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFlightResults(data.flights); // Assuming the API returns flights in the `flights` key
    } catch (error) {
      console.error('Error fetching flight data:', error);
      setFlightResults([]); // Clear results on error
    }
  };

  // Function to handle traveler count change
  const handleTravelerChange = (name, increment) => {
    setTravelers((prev) => ({
      ...prev,
      [name]: Math.max(0, prev[name] + increment), // Prevent negative numbers
    }));
  };

  // Modal control functions
  const handleShow = () => setShowTravelers(true);
  const handleClose = () => setShowTravelers(false);

  // Destructure traveler counts for easier access
  const { adults, children, infants } = travelers;

  return (
    <div className="flights-page">
      <div className="flight-search-container">
        <h2>Search Flights</h2>
        <form className="flight-search-form" onSubmit={handleSearch}>
          {/* Origin Input */}
          <div className="form-group">
            <label htmlFor="origin">From</label>
            <input
              type="text"
              id="origin"
              placeholder="Enter origin city"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>

          {/* Destination Input */}
          <div className="form-group">
            <label htmlFor="destination">To</label>
            <input
              type="text"
              id="destination"
              placeholder="Enter destination city"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* Departure Date using DatePicker */}
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date</label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select departure date"
              className="datepicker-input"
            />
          </div>

          {/* Return Date using DatePicker */}
          <div className="form-group">
            <label htmlFor="returnDate">Return Date</label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select return date"
              className="datepicker-input"
            />
          </div>

          {/* Travelers & Class Dropdown */}
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ flex: 1 }} onClick={handleShow}>
              <span className="fswWidgetLabel">Travellers &amp; Class</span>
              <p className="fswWidgetTitle">
                {adults} Adult(s) <span className="fswDownArrow"></span>
              </p>
              <p>{selectedClass}</p>
            </div>
          </div>

          <Modal show={showTravelers} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Travellers &amp; Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="traveller-selection">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p>Adults (Aged 12+ yrs)</p>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-secondary" onClick={() => handleTravelerChange('adults', -1)}>
                      -
                    </Button>
                    <span className="mx-2">{adults}</span>
                    <Button variant="outline-primary" onClick={() => handleTravelerChange('adults', 1)}>
                      +
                    </Button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p>Children (Aged 2-12 yrs)</p>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-secondary" onClick={() => handleTravelerChange('children', -1)}>
                      -
                    </Button>
                    <span className="mx-2">{children}</span>
                    <Button variant="outline-primary" onClick={() => handleTravelerChange('children', 1)}>
                      +
                    </Button>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p>Infants (Below 2 yrs)</p>
                  </div>
                  <div className="d-flex">
                    <Button variant="outline-secondary" onClick={() => handleTravelerChange('infants', -1)}>
                      -
                    </Button>
                    <span className="mx-2">{infants}</span>
                    <Button variant="outline-primary" onClick={() => handleTravelerChange('infants', 1)}>
                      +
                    </Button>
                  </div>
                </div>

                <div className="mb-3">
                  <p>Travel Class</p>
                  <Dropdown onSelect={(e) => setSelectedClass(e)}>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                      {selectedClass}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
                      <Dropdown.Item eventKey="Premium Economy">Premium Economy</Dropdown.Item>
                      <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                      <Dropdown.Item eventKey="First Class">First Class</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Done
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Search Button */}
          <button type="submit" className="btn search-btn">Search Flights</button>
        </form>
      </div>

      <div className="flight-results">
        <h3>Available Flights</h3>
        {flightResults.length > 0 ? (
          <ul>
            {flightResults.map((flight, index) => (
              <li key={index}>
                {/* Customize the flight information display as needed */}
                <p>{flight.airline} - {flight.price} - {flight.departureTime}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights available yet. Use the form to search for flights.</p>
        )}
      </div>
    </div>
  );
}




// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the datepicker
// import '../css/Flights.css'; // Assuming your custom styles are in Flights.css
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Modal } from 'react-bootstrap';

// export default function Flights() {
//   // State for search form inputs
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [departureDate, setDepartureDate] = useState(null); // Using Date object
//   const [returnDate, setReturnDate] = useState(null); // Using Date object
//   const [travelers, setTravelers] = useState({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [showTravelers, setShowTravelers] = useState(false); // State to toggle the travelers section
//   const [selectedClass, setSelectedClass] = useState('Economy'); // State for flight class
//   const [flightResults, setFlightResults] = useState([]); // State for storing flight results

//   // Handler for form submission
//   const handleSearch = async (e) => {
//     e.preventDefault();

//     // This is where you'll call an API or handle the search
//     try {
//       // Sample API call, replace with your actual API endpoint
//       const response = await fetch(`YOUR_API_ENDPOINT`, {
//         method: 'POST', // or 'GET', based on your API
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           origin,
//           destination,
//           departureDate,
//           returnDate,
//           travelers,
//           selectedClass,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setFlightResults(data.flights); // Assuming the API returns flights in the `flights` key
//     } catch (error) {
//       console.error('Error fetching flight data:', error);
//       setFlightResults([]); // Clear results on error
//     }
//   };

//   // Function to handle traveler count change
//   const handleTravelerChange = (name, increment) => {
//     setTravelers((prev) => ({
//       ...prev,
//       [name]: Math.max(0, prev[name] + increment), // Prevent negative numbers
//     }));
//   };

//   // Modal control functions
//   const handleShow = () => setShowTravelers(true);
//   const handleClose = () => setShowTravelers(false);

//   // Destructure traveler counts for easier access
//   const { adults, children, infants } = travelers;

//   return (
//     <div className="flights-container">
//       <form onSubmit={handleSearch} className="search-form">
//         <div>
//           <label>From:</label>
//           <input
//             type="text"
//             value={origin}
//             onChange={(e) => setOrigin(e.target.value)}
//             placeholder="Enter city or airport"
//             required
//           />
//         </div>
//         <div>
//           <label>To:</label>
//           <input
//             type="text"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             placeholder="Enter city or airport"
//             required
//           />
//         </div>
//         <div>
//           <label>Departure Date:</label>
//           <DatePicker
//             selected={departureDate}
//             onChange={(date) => setDepartureDate(date)}
//             dateFormat="dd/MM/yyyy"
//             required
//           />
//         </div>
//         <div>
//           <label>Return Date:</label>
//           <DatePicker
//             selected={returnDate}
//             onChange={(date) => setReturnDate(date)}
//             dateFormat="dd/MM/yyyy"
//           />
//         </div>
//         <div>
//           <label>Travelers:</label>
//           <span onClick={handleShow}>
//             {`${adults} Adult${adults !== 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${infants} Infant${infants !== 1 ? 's' : ''}`}
//           </span>
//         </div>
//         <div>
//           <label>Class:</label>
//           <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//             <option value="First">First</option>
//           </select>
//         </div>
//         <button type="submit">Search Flights</button>
//       </form>

//       {/* Modal for traveler selection */}
//       <Modal show={showTravelers} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Select Travelers</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             <h5>Adults</h5>
//             <button onClick={() => handleTravelerChange('adults', -1)} disabled={adults <= 1}>-</button>
//             <span>{adults}</span>
//             <button onClick={() => handleTravelerChange('adults', 1)}>+</button>
//           </div>
//           <div>
//             <h5>Children</h5>
//             <button onClick={() => handleTravelerChange('children', -1)} disabled={children <= 0}>-</button>
//             <span>{children}</span>
//             <button onClick={() => handleTravelerChange('children', 1)}>+</button>
//           </div>
//           <div>
//             <h5>Infants</h5>
//             <button onClick={() => handleTravelerChange('infants', -1)} disabled={infants <= 0}>-</button>
//             <span>{infants}</span>
//             <button onClick={() => handleTravelerChange('infants', 1)}>+</button>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleClose}>Save Changes</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Flight results */}
//       {flightResults.length > 0 && (
//         <div className="flight-results">
//           <h3>Available Flights</h3>
//           <ul>
//             {flightResults.map((flight, index) => (
//               <li key={index}>
//                 <p>Flight Number: {flight.flightNumber}</p>
//                 <p>From: {flight.origin} To: {flight.destination}</p>
//                 <p>Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}</p>
//                 <p>Price: ${flight.price}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
