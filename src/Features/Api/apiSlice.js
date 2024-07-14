import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchApi = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetAllProductQuery } = fetchApi;
