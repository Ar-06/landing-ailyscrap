import { Loader2 } from "lucide-react";
import useCategories from "../../hooks/useCategories";
import { CardCategory } from "../features/card-category";

export const Collections = () => {
  const { categories, loading } = useCategories();

  const textColors = ["text-yellow-400", "text-pink-400", "text-teal-400"];

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const topCategories = categories.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="font-display text-3xl md:text-4xl text-gray-900 mb-3 md:mb-4">
            Colecciones de Temporada
          </h3>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topCategories.map((cat, index) => {
            const colorAutomatico = textColors[index % textColors.length];
            return (
              <CardCategory
                key={cat.id}
                category={cat}
                colorClass={colorAutomatico}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
