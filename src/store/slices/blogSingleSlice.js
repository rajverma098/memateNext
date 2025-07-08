import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { blogSingle } from '@/utils/blogApi'; // Update path as needed

export const fetchBlogSingle = createAsyncThunk(
  'blogSingle/fetchBlogSingle',
  async (slug, thunkAPI) => {
    try {
      const data = await blogSingle(slug);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const blogSingleSlice = createSlice({
  name: 'blogSingle',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearBlogSingle: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogSingle.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogSingle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBlogSingle } = blogSingleSlice.actions;
export default blogSingleSlice.reducer;
