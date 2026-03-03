import { Facebook, Instagram, Mail, MapPin, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 relative mt-12">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-gray-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Columna 1: Marca y Redes */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Scissors className="text-primary w-7 h-7 transform -rotate-12" />
              <h2 className="font-display text-3xl text-gray-900 font-bold">
                Aylis Scrap
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto md:mx-0">
              Transformamos papel y creatividad en recuerdos inolvidables hechos
              a mano para cada ocasión especial.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100090678103336"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/aylis.scrap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@aylis.scrap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">
              Explorar
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-primary transition-colors"
                >
                  Colecciones de Temporada
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-primary transition-colors"
                >
                  Catálogo Completo
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 432 432"
                >
                  <path
                    fill="#008000"
                    d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"
                  />
                </svg>
                <span className="font-medium text-gray-700">981 513 141</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>aylis.scrap@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Piura, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Aylis Scrap. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desarrollado con <span className="text-red-500">♥</span> por{" "}
            <a
              href="https://github.com/Ar-06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-teal-700 hover:underline font-medium transition-colors"
            >
              ArDev 👨‍💻
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
