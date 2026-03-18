import { useRef, useState } from "react";
import { CardCategory } from "./card-category";

export const CategoriesCorousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const categoriasDB = [
    {
      id: 1,
      categoryLabel: "AMOR Y AMISTAD",
      title: "San Valentín",
      description: "Detalles llenos de romance.",
      image:
        "https://images.unsplash.com/photo-1518192167132-8418ff86dc8f?fit=crop&w=800",
    },
    {
      id: 2,
      categoryLabel: "PARA MAMÁ",
      title: "Día de la Madre",
      description: "Regalos únicos para la reina.",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?fit=crop&w=800",
    },
    {
      id: 3,
      categoryLabel: "VUELTA A CLASES",
      title: "Campaña Escolar",
      description: "Personaliza la vuelta al cole.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=800",
    },
    {
      id: 4,
      categoryLabel: "DIY & CRAFT",
      title: "Papelería Creativa",
      description: "Kits de scrapbooking.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?fit=crop&w=800",
    },
    {
      id: 5,
      categoryLabel: "BODAS",
      title: "Matrimonios",
      description: "Recuerdos para invitados.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?fit=crop&w=800",
    },
    {
      id: 6,
      categoryLabel: "INFANTIL",
      title: "Baby Shower",
      description: "Para la llegada del bebé.",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?fit=crop&w=800",
    },
    {
      id: 7,
      categoryLabel: "FIESTAS",
      title: "Cumpleaños",
      description: "Cajas sorpresa de regalo.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de88b635f608?fit=crop&w=800",
    },
    {
      id: 8,
      categoryLabel: "EJECUTIVO",
      title: "Corporativo",
      description: "Regalos para empresas.",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=800",
    },
  ];

  const textColors = [
    "text-pink-400",
    "text-yellow-400",
    "text-teal-400",
    "text-purple-400",
  ];
  const dotBgColors = [
    "bg-pink-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-purple-200",
  ];

  const pages = [];
  for (let i = 0; i < categoriasDB.length; i++) {
    pages.push(categoriasDB.slice(i, i + 4));
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
                    categoryLabel={cat.categoryLabel}
                    title={cat.title}
                    description={cat.description}
                    image={cat.image}
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
