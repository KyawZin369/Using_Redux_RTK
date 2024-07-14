
import { configureStore } from '@reduxjs/toolkit';
import { fetchApi } from '../Features/Api/apiSlice';

export const store = configureStore({
  reducer: {
    // Add the API reducer to your store
    [fetchApi.reducerPath]: fetchApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
});
