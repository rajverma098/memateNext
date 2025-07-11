import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import blogSingleReducer from './slices/blogSingleSlice';
import updateReducer from "./slices/updateSlice";
import blogReducer from "./slices/blogSlice";
import contactSlice from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    blogSingle: blogSingleReducer,
    updates: updateReducer,
    blogs: blogReducer,
    contact: contactSlice,
  },
});
