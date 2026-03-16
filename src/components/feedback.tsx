import avatar from "../assets/avatar-lia.png";
import { Carrousel } from "./carrousel";

export const Feedback = () => {
  return (
    <section className="py-16 bg-white overflow-hidden" id="opiniones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-display text-4xl text-gray-900 mb-4">
            Opiniones de nuestros clientes
          </h3>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center pr-4">
            <img
              src={avatar}
              alt="Cliente feliz de Aylis Scrap"
              className="w-auto h-96 object-contain relative z-10"
            />
          </div>

          <div className="w-full">
            <Carrousel />
          </div>
        </div>
      </div>
    </section>
  );
};
