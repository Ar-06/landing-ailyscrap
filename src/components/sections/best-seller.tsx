import { ArrowRight, Loader2, PaintRoller } from "lucide-react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { CardProduct } from "../features/card-product";

export const BestSeller = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const topProducts = products.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-background-light transition-colors duration-300 relative">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <PaintRoller className="w-20 h-20 transform" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-8 md:mb-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-gray-900">
              Lo más vendido
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Nuestras creaciones favoritas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 md:mt-12 text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
