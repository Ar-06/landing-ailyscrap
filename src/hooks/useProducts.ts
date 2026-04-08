import { useCallback, useEffect, useState } from "react";
import type { MetaPagination, Product } from "../@types/product.type";
import { apiProducts } from "../api/apiProducts";

export default function useProducts(limit: number = 10, category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<MetaPagination | null>(null);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(
    async (currentPage: number, isLoadMore: boolean = false) => {
      try {
        if (isLoadMore) setLoadingMore(true);
        else setLoading(true);
        setError(null);

        const response = await apiProducts.getProducts({
          page: currentPage,
          limit,
          category,
        });

        if (isLoadMore) {
          setProducts((prev) => [...prev, ...response.data]);
        } else {
          setProducts(response.data);
        }
        setMeta(response.meta);
      } catch (error) {
        console.log(error);
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [limit, category],
  );
  

  useEffect(() => {
    setPage(1);
    fetchProducts(1, false);
  }, [fetchProducts]);

  const loadMore = () => {
    if (meta && page < meta.totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchProducts(nextPage, true);
    }
  };

  const hasMore = meta ? page < meta.totalPages : false;

  return {
    products,
    meta,
    loading,
    loadingMore,
    error,
    loadMore,
    hasMore,
  };
}
