import React from 'react';
import '../css/Navbar.css'; // Import external CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faTrain, faTaxi, faBus, faUmbrellaBeach, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyBrand</h2>
      </div>
      <ul className="navbar-menu">
        <li><Link to='/'><FontAwesomeIcon icon={faPlane} /> Flights</Link></li>
        <li><Link to='/hotels'><FontAwesomeIcon icon={faHotel} /> Hotels</Link></li>
        <li><Link to='/trains'><FontAwesomeIcon icon={faTrain} /> Trains</Link></li>
        <li><Link to='/cabs'><FontAwesomeIcon icon={faTaxi} /> Cabs</Link></li>
        <li><Link to='/bus'><FontAwesomeIcon icon={faBus} /> Bus</Link></li>
        <li><Link to='/holidays'><FontAwesomeIcon icon={faUmbrellaBeach} /> Holidays</Link></li>
        <li><Link to='forex'><FontAwesomeIcon icon={faMoneyBill} /> Forex</Link></li>
      </ul>
      <div className="navbar-auth">
        <Link to='/login' className="login">Login</Link>
        <Link to='/register' className="signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
