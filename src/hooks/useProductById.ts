import { useEffect, useState } from "react";
import type { Product } from "../@types/product.type";
import { apiProducts } from "../api/apiProducts";

export default function useProductById(id?: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const fetProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiProducts.getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
        setError("No pudimos cargar la información de este producto");
      } finally {
        setLoading(false);
      }
    };

    fetProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}
