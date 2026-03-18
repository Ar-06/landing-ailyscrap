import { CategoriesCorousel } from "../components/ui/categories-corousel";

export default function Categories() {
  return (
    <section className="py-12 md:py-20 decoration-dotted-circle bg-dotted-pattern min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 right-1/4 -mt-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 -mb-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">
            Explora nuestras colecciones
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Nuestras <span className="text-primary">Categorias</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Descubre cada una de nuestras colecciones tematicas diseñadas para
            convertir momentos especiales en recuerdos eternos.
          </p>
        </div>
        <div className="w-full mt-12">
          <CategoriesCorousel />
        </div>
      </div>
    </section>
  );
}
