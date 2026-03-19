import { ArrowRight, PaintRoller } from "lucide-react";
import { Link } from "react-router-dom";
import { CardProduct } from "../features/card-product";

export const BestSeller = () => {
  return (
    <section className="py-12 md:py-16 bg-background-light transition-colors duration-300 relative">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block transform rotate-12">
        <PaintRoller className="w-20 h-20 transform" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-8 md:mb-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-gray-900">
              Lo más vendido
            </h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Nuestras creaciones favoritas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <CardProduct
            product={{
              id_product: "0001",
              title: "Producto 1",
              description: "Descripcion",
              price: 10,
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E",
              category: "Categoria 1",
            }}
          />
        </div>
        <div className="mt-10 md:mt-12 text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
