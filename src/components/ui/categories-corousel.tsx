import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import useCategories from "../../hooks/useCategories";
import { CardCategory } from "../features/card-category";

export const CategoriesCorousel = () => {
  const { categories, loading } = useCategories();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const textColors = [
    "text-yellow-400",
    "text-pink-400",
    "text-teal-400",
    "text-purple-400",
  ];
  const dotBgColors = [
    "bg-yellow-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-purple-200",
  ];

  const pages = [];
  for (let i = 0; i < categories.length; i += 4) {
    pages.push(categories.slice(i, i + 4));
  }

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const newIndex = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(newIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((pageGroup, pageIndex) => (
          <div key={pageIndex} className="w-full shrink-0 snap-center px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {pageGroup.map((cat, catIndex) => {
                const globalIndex = pageIndex * 4 + catIndex;
                const colorAutomatico =
                  textColors[globalIndex % textColors.length];

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
        ))}
      </div>

      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          {pages.map((_, index) => {
            const isActive = activeIndex === index;
            const inactiveColor = dotBgColors[index % dotBgColors.length];
            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir a la página de categorias ${index + 1}`}
                className={`rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-3.5 h-3.5 bg-primary scale-110 shadow-md"
                    : `w-2.5 h-2.5 ${inactiveColor} hover:scale-110 opacity-70`
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
