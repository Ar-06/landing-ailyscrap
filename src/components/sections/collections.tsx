import { Gift, Heart, School } from "lucide-react";

export const Collections = () => {
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
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10" />
            <img
              alt="san valentin"
              className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                San Valentín
              </h4>
              <p className="text-white/90 text-sm">
                Caja de sorpresas y cartas de amor
              </p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10" />
            <img
              alt="Día de la madre"
              className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="h-10 w-10 bg-secondary text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Gift className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                Día de la madre
              </h4>
              <p className="text-white/90 text-sm">
                Detalles frorales y regalos
              </p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10" />
            <img
              alt="Campaña escolar"
              className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                <School className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                Campaña escolar
              </h4>
              <p className="text-white/90 text-sm">
                Etiquetas y cuadernos únicos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
