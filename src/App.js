import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Flights from './components/Flights';
import Hotels from './components/Hotels';
import Trains from './components/Trains';
import Cabs from './components/Cabs';
import Bus from './components/Bus';
import Holidays from './components/Holidays';
import Forex from './components/Forex';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Flights/>} />
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/trains' element={<Trains/>}/>
        <Route path='/cabs' element={<Cabs/>}/>
        <Route path='/bus' element={<Bus/>}/>
        <Route path='/holidays' element={<Holidays/>}/>
        <Route path='/forex' element={<Forex/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

