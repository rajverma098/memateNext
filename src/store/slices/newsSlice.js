import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { blogList } from '@/utils/blogApi'; 

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page = 1, limit = 10, activeCategory = 0 }, thunkAPI) => {
    try {
      const data = await blogList(page, limit, activeCategory);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
