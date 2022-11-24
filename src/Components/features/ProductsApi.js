
import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shoppingapiacme.herokuapp.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (id) => `shopping`,
    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi;