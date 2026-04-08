import { Endpoints } from "./index";
import type {
  ProductResponse,
  SingleProductResponse,
} from "../@types/product.type";

export const apiProducts = {
  getProducts: async ({
    page = 1,
    limit = 10,
    category,
  }: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<ProductResponse> => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
    });

    if (category) {
      params.append("category", category); 
    }

    const response = await fetch(`${Endpoints.PRODUCTS}?${params.toString()}`);

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    return await response.json();
  },

  getProductById: async (id: string): Promise<SingleProductResponse> => {
    const response = await fetch(`${Endpoints.PRODUCTS}/${id}`);

    if (!response.ok) {
      throw new Error("Error al obtener el producto");
    }

    return await response.json();
  },
};
