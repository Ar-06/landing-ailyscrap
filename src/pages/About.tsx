import { Hand, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section className="py-12 md:py-20 decoration-dotted-circle bg-dotted-pattern min-h-screen  animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-gray-50 p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="bg-white p-4 rounded-2xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E"
                  alt="image1"
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <p className="font-display text-xl text-primary text-center">
                  Manos a la obra
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md -rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-100 ml-8 md:ml-16 mt-5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E"
                  alt="image2"
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <p className="font-display text-xl text-accent text-center">
                  Cada detalle cuenta
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-100 mt-5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E"
                  alt="image1"
                  className="w-full h-48 object-cover rounded-xl mb-3"
                />
                <p className="font-display text-xl text-secondary text-center">
                  Inspiración en colores
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full p-8 lg:p-16 bg-white">
              <div className="mb-16 mt-10">
                <span className="text-accent font-bold text-sm tracking-widest uppercase mb-2 block">
                  Sobre nosotros
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-gray-900 -mb-3 leading-tight">
                  Nuestra Historia:{" "}
                </h2>
                <h3 className="text-primary font-display text-4xl md:text-5xl mb-6 leading-tight">
                  Creamos con amor
                </h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                  <p>
                    Todo comenzó en una pequeña mesa de comedor, rodeada de
                    recortes de papel, pegamento y una inmensa pasión por
                    capturar momentos. Lo que empezó como un hobby para regalar
                    detalles únicos a amigos y familiares, pronto se transformó
                    en{" "}
                    <span className="text-secondary font-light">
                      Aylis Scrap
                    </span>
                    .
                  </p>
                  <p>
                    Creemos firmemente que los regalos no deben ser objetos
                    vacíos, sino vehículos de emociones. En un mundo digital y
                    efímero, nos dedicamos a rescatar la magia de lo tangible.
                    Cada corte, cada pliegue y cada adorno se coloca con la
                    intención de contar una historia:{" "}
                    <em className="font-light text-accent">la tuya</em>.
                  </p>
                  <p>
                    Nuestro compromiso es transformar tus recuerdos más
                    preciados en obras de arte hechas a mano, piezas únicas que
                    perduren en el tiempo y revivan la alegría de ese instante
                    especial cada vez que se abren.
                  </p>
                </div>
                <div className="mt-12 flex items-center space-x-4">
                  <div className="h-px bg-gray-200 grow" />
                  <Heart className="text-accent h-5 w-5" />
                  <div className="h-px bg-gray-200 grow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="font-display text-4xl text-gray-900 mb-4">
              Nuestros valores
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lo que nos mueve cada día a seguir creando.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-light p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-red-400 w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Pasión</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ponemos el corazón en cada proyecto. No es solo papel, es el
                cariño con el que trabajamos para que sientas la emoción al
                recibirlo.
              </p>
            </div>
            <div className="bg-surface-light p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Hand className="text-teal-400 w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">
                Hecho a Mano
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Defendemos lo artesanal. Cada imperfección es una marca de
                autenticidad y dedicación humana, lejos de la producción masiva.
              </p>
            </div>
            <div className="bg-surface-light p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-yellow-400 h-8 w-8" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Calidad</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seleccionamos los mejores materiales. Cartulinas de alto gramaje
                y adhesivos duraderos para que tus recuerdos vivan por siempre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
