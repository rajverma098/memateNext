import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestCallBackAPI, SubscribeEmail } from '../../../src/utils/blogApi';

export const requestCallback = createAsyncThunk(
  'api/requestCallback',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await RequestCallBackAPI(formData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const subscribeEmail = createAsyncThunk(
  'api/subscribeEmail',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await SubscribeEmail(formData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'api',
  initialState: {
    callbackResponse: null,
    subscribeResponse: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Request Callback
      .addCase(requestCallback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestCallback.fulfilled, (state, action) => {
        state.loading = false;
        state.callbackResponse = action.payload;
      })
      .addCase(requestCallback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Subscribe Email
      .addCase(subscribeEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscribeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribeResponse = action.payload;
      })
      .addCase(subscribeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
