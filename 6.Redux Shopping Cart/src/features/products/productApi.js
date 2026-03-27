import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    getCategories: builder.query({
      query: () => "/products/categories",
    }),

    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productApi;
