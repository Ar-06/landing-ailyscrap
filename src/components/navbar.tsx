import { ArrowRight, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface-light/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-secondary text-white rounded-full p-1 shadow-sm">
              <Scissors className="w-6 h-6 transform -rotate-12" />
            </div>
            <div className="hidden md:block">
              <h1 className="font-display text-3xl text-gray-900 leading-none">
                Aylis Scrap
              </h1>
              <p className="text-xs text-primary font-semibold tracking-wide uppercase">
                Creamos con amor
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/catalog"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Catálogo
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Categorías
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Historia
            </Link>
            <button className="flex items-center justify-between px-5 py-2 gap-2 rounded-full bg-primary text-white font-medium hover:bg-teal-600 transition-all shadow-md cursor-pointer">
              <span>Contactar</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
