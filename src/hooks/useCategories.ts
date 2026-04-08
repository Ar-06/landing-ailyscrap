import { useEffect, useState } from "react";
import type { Category } from "../@types/category.type";
import { apiCategories } from "../api/apiCategories";

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiCategories.getCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      const errMessage = "Error al cargar categorias";
      setError(errMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
}
