import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getProductsById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),

    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),

    getProductsByCategory: builder.query<Product[], string>({
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
