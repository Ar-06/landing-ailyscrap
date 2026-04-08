import { ChevronDown, Loader2, Package2Icon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CardProduct } from "../components/features/card-product";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";

export default function Catalog() {
  const { categoryId } = useParams();
  const { products, loading, loadingMore, loadMore, error, hasMore } =
    useProducts(10, categoryId);
  const { categories } = useCategories();

  const activeCategoryName = categoryId
    ? categories.find((c) => c.id === categoryId)?.name || "Categoría"
    : null;

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h3 className="text-2xl font-display text-gray-900 mb-2">
          ¡Ups! Algo salió mal
        </h3>
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 decoration-dotted-circle bg-dotted-pattern min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 right-1/4 -mt-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 -mb-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">
            {activeCategoryName ? "Colección Especial" : "Hecho a mano"}
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
            {activeCategoryName ? (
              <span className="capitalize">{activeCategoryName}</span>
            ) : (
              <>
                Nuestro <span className="text-primary">Catálogo</span>
              </>
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            {activeCategoryName
              ? `Explora todos nuestros diseños únicos en la categoría de ${activeCategoryName.toLowerCase()}.`
              : "Descubre nuestra colección de detalles únicos, creados con paciencia y cariño para atesorar tus momentos más especiales."}
          </p>
          {activeCategoryName && (
            <div className="mt-6">
              <Link
                to="/catalog"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-full"
              >
                ← Ver todos los productos
              </Link>
            </div>
          )}
        </div>

        {products.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center">
            <Package2Icon className="w-12 h-12 text-gray-500" />
            <h3 className="text-xl font-medium text-gray-900 mt-4">
              Aún no hay productos
            </h3>
            <p className="text-gray-500 mt-2">
              Estamos creando cosas hermosas. Vuelve pronto para descubrirlas
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        )}

        {hasMore && (
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="mt-12 md:mt-16 border-2 border-primary rounded-full text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
              {loadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                  Cargando...
                </>
              ) : (
                <>
                  Ver más productos
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </>
              )}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
