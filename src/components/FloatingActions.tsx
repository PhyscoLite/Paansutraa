import { FileText, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* PDF Brochure Link */}
      <a 
        className="bg-surface-container-high border border-secondary/20 p-4 rounded-full text-secondary gold-glow hover:scale-110 active:scale-95 transition-transform flex items-center gap-3" 
        href="#"
      >
        <FileText className="w-6 h-6" />
        <span className="hidden md:inline text-label-md">Brochure</span>
      </a>
      
      {/* Floating WhatsApp */}
      <a 
        className="bg-secondary p-4 rounded-full text-on-secondary shadow-xl gold-glow hover:scale-110 active:scale-95 transition-transform flex items-center gap-3" 
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-label-md">Talk to Our Partnership Team</span>
      </a>
    </div>
  );
}
