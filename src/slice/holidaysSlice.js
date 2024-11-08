import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHolidays = createAsyncThunk('holidays/fetchHolidays', async () => {
  const response = await axios.get('http://yourapiurl.com/api/holidays');
  return response.data;
});

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: { holidays: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => { state.loading = true; })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.holidays = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default holidaysSlice.reducer;
