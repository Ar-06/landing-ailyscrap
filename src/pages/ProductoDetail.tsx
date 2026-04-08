import {
  Clock,
  Frown,
  Image as ImageIcon,
  Loader2,
  Package,
  Palette,
  Ruler,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductImage } from "../@types/product.type";
import useProductById from "../hooks/useProductById";

export const ProductDetail = () => {
  const { id } = useParams();

  const { product, loading, error } = useProductById(id);

  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);

  if (loading) {
    return (
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <Frown className="w-12 h-12 text-gray-500 mb-4" />
        <p className="text-gray-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <Frown className="w-12 h-12 text-gray-500 mb-4" />
        <p className="text-gray-500 text-lg">Producto no encontrado</p>
      </div>
    );
  }

  const galleryImages = product.images || [];
  const displayImage = selectedImage || galleryImages[0];

  const specsList = product.specs
    ? Object.entries(product.specs).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) => value && value.trim() !== "",
      )
    : [];

  const phoneNumber = "51981513141";
  const message = `¡Hola Aylis Scrap! ✨ Me encantaría pedir el producto:\n\n*${product.title}*\n💰 Precio: S/ ${product.price}\n\n¿Me podrías confirmar disponibilidad?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-12 md:py-20 bg-dotted-pattern decoration-dotted-circle min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-gray-50 p-8 lg:p-12 relative overflow-hidden flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-white p-2 rounded-2xl shadow-md border border-gray-100 mb-4 aspect-square flex items-center justify-center overflow-hidden">
                  {displayImage ? (
                    <img
                      src={displayImage.url}
                      alt={product.title}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
                      <span className="text-sm">Sin imagen</span>
                    </div>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {galleryImages.map((image, index) => {
                      const isActive = displayImage?.id === image.id;

                      return (
                        <button
                          key={image.id}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className={`bg-white p-1.5 rounded-xl border shadow-sm transition-all overflow-hidden ${
                            isActive
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-gray-100 hover:border-primary/40"
                          }`}
                          aria-label={`Ver imagen ${index + 1}`}
                          aria-pressed={isActive}
                        >
                          <img
                            src={image.url}
                            alt={`Miniatura ${index + 1}`}
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
                  {product.category?.name || "Catálogo"}
                </span>
                <h1 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    S/ {Number(product.price).toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                  {product.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8 shadow-sm">
                {specsList.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Detalles del producto
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {specsList.map(([key, value], index) => {
                        let Icon = Package;
                        let iconColor = "text-purple-400";

                        const lowerKey = key.toLowerCase();
                        if (
                          lowerKey.includes("tamaño") ||
                          lowerKey.includes("dimes") ||
                          lowerKey.includes("medida")
                        ) {
                          Icon = Ruler;
                          iconColor = "text-primary";
                        } else if (lowerKey.includes("material")) {
                          Icon = Palette;
                          iconColor = "text-secondary";
                        } else if (
                          lowerKey.includes("tiempo") ||
                          lowerKey.includes("elaboraci") ||
                          lowerKey.includes("lead")
                        ) {
                          Icon = Clock;
                          iconColor = "text-accent";
                        }

                        return (
                          <div key={index} className="flex items-start gap-3">
                            <Icon
                              className={`w-5 h-5 ${iconColor} mt-0.5 shrink-0`}
                            />
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                {key}
                              </p>
                              <p className="text-sm text-gray-700">{value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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
