import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../@types/product.type";

interface CardProps {
  product: Product;
}

export const CardProduct = ({ product }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      role="button"
      tabIndex={0}
      className={`group relative bg-white rounded-3xl p-3 shadow-sm transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer overflow-hidden ${
        product.isAvailable
          ? "hover:shadow-xl hover:-translate-y-1"
          : "opacity-85 hover:shadow-md"
      }`}
    >
      <div className="relative overflow-hidden w-full h-56 sm:h-64 rounded-2xl mb-5">
        <img
          src={product.images[0]?.url}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            product.isAvailable ? "group-hover:scale-105" : "grayscale-[0.4]"
          }`}
        />

        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm z-10">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
            {product.category.name}
          </span>
        </div>

        {!product.isAvailable && (
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] flex items-center justify-center z-20">
            <span className="bg-rose-500 text-white font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full shadow-md">
              Agotado
            </span>
          </div>
        )}

      
        {product.isAvailable && (
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
        )}
      </div>

      <div className="flex flex-col grow px-3 pb-3 text-left">
        <h4
          className={`font-display text-2xl mb-2 transition-colors duration-300 line-clamp-2 leading-tight ${
            product.isAvailable
              ? "text-gray-900 group-hover:text-primary"
              : "text-gray-600"
          }`}
        >
          {product.title}
        </h4>

        <p className="text-gray-400 text-sm line-clamp-1 font-light mb-4">
          {product.description}
        </p>

        <div
          className={`mt-auto flex items-end justify-between pt-4 border-t transition-colors ${
            product.isAvailable
              ? "border-gray-50 group-hover:border-gray-100"
              : "border-gray-50"
          }`}
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
              Precio
            </span>
            <span className="text-2xl font-bold text-gray-900 leading-none">
              S/ {Number(product.price).toFixed(2)}
            </span>
          </div>

          {/* Cambiamos el color del botoncito si no hay stock */}
          <div
            className={`flex items-center gap-2 font-medium transition-opacity ${
              product.isAvailable
                ? "text-primary opacity-80 group-hover:opacity-100"
                : "text-gray-400 opacity-80"
            }`}
          >
            <span className="text-sm">Ver más</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                product.isAvailable
                  ? "bg-primary/10 group-hover:bg-primary group-hover:text-white"
                  : "bg-gray-100"
              }`}
            >
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  product.isAvailable ? "group-hover:translate-x-0.5" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
