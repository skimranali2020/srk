import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCabs = createAsyncThunk('cabs/fetchCabs', async () => {
  const response = await axios.get('http://yourapiurl.com/api/cabs');
  return response.data;
});

const cabsSlice = createSlice({
  name: 'cabs',
  initialState: { cabs: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCabs.pending, (state) => { state.loading = true; })
      .addCase(fetchCabs.fulfilled, (state, action) => {
        state.cabs = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCabs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cabsSlice.reducer;
