import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk
export const fetchLatestBlogs = createAsyncThunk(
  "blogs/fetchLatestBlogs",
  async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch("https://admin.memate.com.au/api/get-latest-three-news", requestOptions);
    const result = await response.json();
    console.log("API RESPONSE blogLatest -- ", result);
    return result;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLatestBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default blogSlice.reducer;
