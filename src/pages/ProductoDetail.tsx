import { Clock, Package, Palette, Ruler } from "lucide-react";
import { useState } from "react";

export const ProductDetail = () => {
  const product = {
    title: "Explosión Box Amor",
    category: "Amor y Amistad",
    price: 10.0,
    description:
      "Caja desplegable personalizada con 4 capas para fotos y mensajes. Hecha a mano con cartulina de alta calidad y detalles en relieve. Perfecta para sorprender a tu persona favorita con un recuerdo único que se despliega al abrir la tapa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjfM273dOW-almyOga_s4b-WMT2WQQKUv_Q0tEwga4hKsJOPNEU7sEqdX8IqVVoBEmDdVAGYVfJwuma3JYmcmLgzUWsG7Agcw5tjxfv9-OggMUpEqntFw9qVJQfycHhX8spt92Vi1Fm_NImc4nDrWzLu7iZbU8oBKTfNCTZAZK01tzbel2J-wgWqYcnly060tjOAd4b45RCDuT8Y86nFrWuR0-NKYwGch2uV74HqsYxp_4YRhHKd2gIbk6C-li6q-n8bzIOn6v6E",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    ],

    specs: {
      dimensions: "15 x 15 x 15 cm (Cerrada)",
      material: "Cartulina fina 250g",
      leadTime: "3 a 5 días hábiles",
      capacity: "Hasta 24 fotos",
    },
  };

  const galleryImages = product.images?.length
    ? product.images
    : [product.image];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  const phoneNumber = "51981513141";
  const message = `¡Hola Aylis Scrap! ✨ Me encantaría pedir el producto:\n\n*${product.title}*\n💰 Precio: S/ ${product.price.toFixed(2)}\n\n¿Me podrías confirmar disponibilidad?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-12 md:py-20 bg-dotted-pattern decoration-dotted-circle min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-gray-50 p-8 lg:p-12 relative overflow-hidden flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white p-2 rounded-2xl shadow-md border border-gray-100 mb-4">
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full h-auto rounded-xl object-cover aspect-square"
                  />
                </div>

                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {galleryImages.map((image, index) => {
                      const isActive = image === selectedImage;

                      return (
                        <button
                          key={`${product.title}-${index}`}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className={`bg-white p-1.5 rounded-xl border shadow-sm transition-all overflow-hidden ${
                            isActive
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-gray-100 hover:border-primary/40"
                          }`}
                          aria-label={`Ver imagen ${index + 1} de ${product.title}`}
                          aria-pressed={isActive}
                        >
                          <img
                            src={image}
                            alt={`${product.title} miniatura ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-6">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                  {product.category}
                </span>
                <h1 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    S/ {product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Detalles del producto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {product.specs.dimensions && (
                    <div className="flex items-start gap-3">
                      <Ruler className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                          Tamaño
                        </p>
                        <p className="text-sm text-gray-700">
                          {product.specs.dimensions}
                        </p>
                      </div>
                    </div>
                  )}

                  {product.specs.material && (
                    <div className="flex items-start gap-3">
                      <Palette className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                          Material
                        </p>
                        <p className="text-sm text-gray-700">
                          {product.specs.material}
                        </p>
                      </div>
                    </div>
                  )}

                  {product.specs.leadTime && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                          Elaboración
                        </p>
                        <p className="text-sm text-gray-700">
                          {product.specs.leadTime}
                        </p>
                      </div>
                    </div>
                  )}

                  {product.specs.capacity && (
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                          Capacidad / Incluye
                        </p>
                        <p className="text-sm text-gray-700">
                          {product.specs.capacity}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
