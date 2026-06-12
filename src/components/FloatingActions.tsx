import { FileText, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {/* PDF Brochure Link */}
      <a 
        className="group bg-surface-container-high border border-secondary/20 h-14 rounded-full text-secondary gold-glow transition-all duration-500 ease-in-out flex items-center shadow-lg hover:shadow-xl max-w-[56px] hover:max-w-[200px] overflow-hidden" 
        href="#"
      >
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <span className="text-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-6">
          Brochure
        </span>
      </a>
      
      {/* Floating WhatsApp */}
      <a 
        className="group bg-secondary h-14 rounded-full text-on-secondary shadow-xl gold-glow transition-all duration-500 ease-in-out flex items-center hover:bg-secondary/90 max-w-[56px] hover:max-w-[350px] overflow-hidden" 
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span className="text-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-6">
          Talk to Our Partnership Team
        </span>
      </a>
    </div>
  );
}
