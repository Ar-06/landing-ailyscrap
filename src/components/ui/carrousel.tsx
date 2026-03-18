const carouselImages: string[] = [
  "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542461845-a4b08dcba10d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

export const Carrousel = () => {
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <div className="relative w-full overflow-hidden group">
      <div className="flex w-max animate-scroll-infinite group-hover:[animation-play-state:paused] touch-pan-y">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="w-[400px] md:w-[500px] shrink-0">
            <img
              src={src}
              alt={`Opinión visual de cliente de Aylis Scrap`}
              className="w-full h-80 md:h-96 object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
