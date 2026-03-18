import { ChevronDown } from "lucide-react";
import { CardProduct } from "../components/card-product";

export default function Catalog() {
  return (
    <section className="py-12 md:py-20 decoration-dotted-circle bg-dotted-pattern min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 right-1/4 -mt-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 -mb-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">
            Hecho a mano
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Nuestro <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Descubre nuestra colección de detalles únicos, creados con paciencia
            y cariño para atesorar tus momentos más especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardProduct
              key={index}
              title="Card"
              description="Card"
              image="https://images.unsplash.com/photo-1506744038136-479a7d45f98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              price={10}
              category="Category"
            />
          ))}
        </div>
        <button className="mt-12 md:mt-16 border-2 border-primary rounded-full text-primary px-7 py-3 hover:bg-primary hover:text-white transition-colors duration-300">
          <span className="flex items-center gap-2 font-semibold text-sm md:text-base">
            Ver más productos
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </button>
      </div>
    </section>
  );
}
