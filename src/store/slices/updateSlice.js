import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk
export const fetchLatestUpdates = createAsyncThunk(
  "updates/fetchLatestUpdates",
  async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Update-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82U");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch("https://admin.memate.com.au/api/get-latest-five-update", requestOptions);
    const result = await response.json();
    return result;
  }
);

const updateSlice = createSlice({
  name: "updates",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestUpdates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestUpdates.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLatestUpdates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default updateSlice.reducer;
