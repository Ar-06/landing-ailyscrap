import { Endpoints } from "./index";
import type { CategoryResponse } from "../@types/category.type";

export const apiCategories = {
  getCategories: async (): Promise<CategoryResponse> => {
    const response = await fetch(Endpoints.CATEGORIES);

    if (!response.ok) {
      throw new Error("Error al obtener las categorias");
    }

    return await response.json();
  },
};
