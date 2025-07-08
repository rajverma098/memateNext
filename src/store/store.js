import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import blogSingleReducer from './slices/blogSingleSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    blogSingle: blogSingleReducer,
  },
});
