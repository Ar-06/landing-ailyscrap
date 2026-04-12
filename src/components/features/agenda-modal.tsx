import { AlertCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { apiSetting } from "../../api/apiSetting";

export const AgendaModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkAgendaStatus = async () => {
      try {
        const hasSeenModal = sessionStorage.getItem("agendaModalSeen");

        if (!hasSeenModal) {
          const response = await apiSetting.getSettingByKey("IS_STORE_OPEN");

          if (response?.data?.value === "false") {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
          }
        }
      } catch (error) {
        console.error("Error revisando el estado de la agenda:", error);
      }
    };

    checkAgendaStatus();
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("agendaModalSeen", "true");
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-4xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative transform transition-all animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mt-2">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-5 text-orange-500 shadow-inner">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display text-gray-900 font-bold mb-3 leading-tight">
            ¡Agenda temporalmente llena!
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            Agradecemos muchísimo tu preferencia. Por el momento nos encontramos
            con{" "}
            <strong className="text-gray-900 font-semibold">
              capacidad máxima de pedidos
            </strong>{" "}
            y no estamos recibiendo nuevos encargos.
            <br />
            <br />
            Te invitamos a seguir explorando nuestro catálogo para inspirarte.
            ¡Anunciaremos pronto nuestra reapertura!
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 py-3.5 text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Entendido, ver catálogo
          </button>
        </div>
      </div>
    </div>
  );
};
