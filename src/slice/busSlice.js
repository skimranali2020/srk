import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBus = createAsyncThunk('bus/fetchBus', async () => {
  const response = await axios.get('http://yourapiurl.com/api/bus');
  return response.data;
});

const busSlice = createSlice({
  name: 'bus',
  initialState: { bus: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBus.pending, (state) => { state.loading = true; })
      .addCase(fetchBus.fulfilled, (state, action) => {
        state.bus = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default busSlice.reducer;
