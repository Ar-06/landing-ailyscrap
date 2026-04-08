import { ArrowRight } from "lucide-react"; // Usaremos una flecha elegante
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
      className="group relative bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer overflow-hidden"
    >
      <div className="relative overflow-hidden w-full h-56 sm:h-64 rounded-2xl mb-5">
        <img
          src={product.images[0].url}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
            {product.category.name}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      <div className="flex flex-col grow px-3 pb-3 text-left">
        <h4 className="font-display text-2xl text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
          {product.title}
        </h4>

        <p className="text-gray-400 text-sm line-clamp-1 font-light mb-4">
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-50 group-hover:border-gray-100 transition-colors">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
              Precio
            </span>
            <span className="text-2xl font-bold text-gray-900 leading-none">
              S/ {Number(product.price).toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-primary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-sm">Ver más</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
