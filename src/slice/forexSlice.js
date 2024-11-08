import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchForex = createAsyncThunk('forex/fetchForex', async () => {
  const response = await axios.get('http://yourapiurl.com/api/forex');
  return response.data;
});

const forexSlice = createSlice({
  name: 'forex',
  initialState: { forex: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForex.pending, (state) => { state.loading = true; })
      .addCase(fetchForex.fulfilled, (state, action) => {
        state.forex = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchForex.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default forexSlice.reducer;
