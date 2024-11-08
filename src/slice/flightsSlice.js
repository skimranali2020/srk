import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await axios.get('http://yourapiurl.com/api/flights');
  return response.data;
});

const flightsSlice = createSlice({
  name: 'flights',
  initialState: { flights: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => { state.loading = true; })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.flights = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default flightsSlice.reducer;
