// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from '../slice/flightsSlice';
import hotelsReducer from '../slice/hotelsSlice';
import trainsReducer from '../slice/trainsSlice';
import cabsReducer from '../slice/cabsSlice';
import busReducer from '../slice/busSlice';
import holidaysReducer from '../slice/holidaysSlice';
import forexReducer from '../slice/forexSlice';
import authReducer from '../slice/authSlice'; // Import the auth slice

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    hotels: hotelsReducer,
    trains: trainsReducer,
    cabs: cabsReducer,
    buses: busReducer,
    holidays: holidaysReducer,
    forex: forexReducer,
    auth: authReducer, // Add the auth reducer
  },
});

export default store;
