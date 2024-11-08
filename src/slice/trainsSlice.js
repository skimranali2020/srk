import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrains = createAsyncThunk('trains/fetchTrains', async () => {
  const response = await axios.get('http://yourapiurl.com/api/trains');
  return response.data;
});

const trainsSlice = createSlice({
  name: 'trains',
  initialState: { trains: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrains.pending, (state) => { state.loading = true; })
      .addCase(fetchTrains.fulfilled, (state, action) => {
        state.trains = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrains.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default trainsSlice.reducer;
