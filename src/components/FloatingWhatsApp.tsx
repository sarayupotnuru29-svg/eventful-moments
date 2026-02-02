import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP.getUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" fill="white" />
    </a>
  );
};

export default FloatingWhatsApp;
