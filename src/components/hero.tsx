import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24 decoration-dotted-circle bg-dotted-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center space-x-2 md:space-x-3 mb-6 md:mb-8">
          <div className="w-6 h-8 md:w-8 md:h-10 bg-secondary transform rotate-3" />
          <div className="w-6 h-8 md:w-8 md:h-10 bg-primary transform -rotate-2" />
          <div className="w-6 h-8 md:w-8 md:h-10 bg-accent transform rotate-1" />
          <div className="w-6 h-8 md:w-8 md:h-10 bg-secondary transform -rotate-3" />
          <div className="w-6 h-8 md:w-8 md:h-10 bg-primary transform rotate-2" />
          <div className="w-6 h-8 md:w-8 md:h-10 bg-accent transform -rotate-1" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 text-gray-900 drop-shadow-sm px-2">
          Detalles hechos a mano
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-2 sm:px-0">
          Transformamos papel y creatividad en recuerdos inolvidables. Regalos
          personalizados para cada temporada especial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/catalog"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-bold text-lg hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Catálogo
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-bold text-lg transition-all"
          >
            Pedido Personalizado
          </Link>
        </div>
      </div>

      <div className="absolute top-1/4 left-4 md:left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl hidden sm:block" />
      <div className="absolute bottom-1/4 right-4 md:right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl hidden sm:block" />
    </section>
  );
};
