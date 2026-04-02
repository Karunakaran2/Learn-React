import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productService.getProducts,
  });
};

export const useProductById = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => productService.getProductsById(id),
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: productService.getCategories,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category,
  });
};
