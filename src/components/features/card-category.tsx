import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { Category } from "../../@types/category.type";

interface CardCategoryProps {
  category: Category;
  colorClass: string;
}

export const CardCategory = ({ category, colorClass }: CardCategoryProps) => {
  return (
    <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col h-full overflow-visible">
      <div className="relative overflow-hidden h-72 rounded-t-3xl">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/50 to-transparent pointer-events-none" />

        <div className="absolute top-5 left-6 text-white flex items-center gap-2.5 z-10 text-sm">
          <Sparkles className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold uppercase tracking-widest leading-none">
            {category.label}
          </span>
        </div>
      </div>

      <div className="absolute top-72 right-6 -translate-y-1/2 z-20">
        <div className="bg-white rounded-full p-4 shadow-lg border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110">
          <Sparkles className={`w-8 h-8 ${colorClass}`} />
        </div>
      </div>

      <div className="p-7 pt-9 flex flex-col grow justify-between bg-linear-to-b from-white to-transparent">
        <div className="text-left">
          <h3 className="font-display text-4xl text-gray-900 mb-4 tracking-tight leading-tight">
            {category.name}
          </h3>
          <p className="text-gray-600 text-base font-light mb-8 line-clamp-3 leading-relaxed">
            {category.description}
          </p>
        </div>

        <Link
          to={`/catalog/category/${category.id}`}
          className={`inline-flex items-center gap-2.5 ${colorClass} font-medium hover:underline transition-colors group/link`}
        >
          <span className="text-base">Ver colección</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
};
