import { Product } from "../types";
import axios from "axios";

export const productService = {
  axiosInstance: axios.create({
    baseURL: "https://fakestoreapi.com",
  }),

  getProducts: async (): Promise<Product[]> => {
    const response = await productService.axiosInstance.get("/products");
    return response.data;
  },

  getProductsById: async (id: number): Promise<Product> => {
    const response = await productService.axiosInstance.get(`/products/${id}`);
    return response.data;
  },

  getCategories: async (): Promise<string[]> => {
    const response = await productService.axiosInstance.get(
      "/products/categories",
    );
    return response.data;
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await productService.axiosInstance.get(
      `/products/category/${category}`,
    );
    return response.data;
  },
};
