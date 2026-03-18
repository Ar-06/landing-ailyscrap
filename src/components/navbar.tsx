import { ArrowRight, Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface-light/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-secondary text-white rounded-full p-1 shadow-sm shrink-0">
                <Scissors className="w-5 h-5 md:w-6 md:h-6 transform -rotate-12" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-display text-xl md:text-3xl text-gray-900 leading-none">
                  Aylis Scrap
                </h1>
                <p className="text-[10px] md:text-xs text-primary font-semibold tracking-wide uppercase">
                  Creamos con amor
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`hover:text-primary transition-colors font-medium ${
                  location.pathname === "/" ? "text-primary" : "text-gray-600"
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/catalog"
                className={`hover:text-primary transition-colors font-medium ${
                  location.pathname === "/catalog" ? "text-primary" : "text-gray-600"
                }`}
              >
                Catálogo
              </Link>
              <Link
                to="/categories"
                className={`hover:text-primary transition-colors font-medium ${
                  location.pathname === "/categories" ? "text-primary" : "text-gray-600"
                }`}
              >
                Categorías
              </Link>
              <Link
                to="/about"
                className={`hover:text-primary transition-colors font-medium ${
                  location.pathname === "/about" ? "text-primary" : "text-gray-600"
                }`}
              >
                Historia
              </Link>
              <button className="flex items-center justify-between px-5 py-2 gap-2 rounded-full bg-primary text-white font-medium hover:bg-teal-600 transition-all shadow-md cursor-pointer">
                <span>Contactar</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-600 hover:text-primary transition-colors focus:outline-none"
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-70 shadow-[0_0_40px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col rounded-l-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-secondary text-white rounded-full p-1 shadow-sm shrink-0">
              <Scissors className="w-4 h-4 transform -rotate-12" />
            </div>
            <span className="font-display text-xl text-gray-900 leading-none">
              Aylis
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-surface-light rounded-full focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col py-6 px-4 space-y-2 grow overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all font-medium ${
              location.pathname === "/" ? "text-primary bg-primary/5" : "text-gray-700 bg-transparent"
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/catalog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all font-medium ${
              location.pathname === "/catalog" ? "text-primary bg-primary/5" : "text-gray-700 bg-transparent"
            }`}
          >
            Catálogo
          </Link>
          <Link
            to="/categories"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all font-medium ${
              location.pathname === "/categories" ? "text-primary bg-primary/5" : "text-gray-700 bg-transparent"
            }`}
          >
            Categorías
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all font-medium ${
              location.pathname === "/about" ? "text-primary bg-primary/5" : "text-gray-700 bg-transparent"
            }`}
          >
            Historia
          </Link>

          <div className="pt-8 mt-auto px-2 pb-6">
            <button className="w-full flex items-center justify-center px-5 py-3.5 gap-2 rounded-full bg-primary text-white font-medium hover:bg-teal-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span>Contactar</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
