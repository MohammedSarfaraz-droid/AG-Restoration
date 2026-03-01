import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <a
      href="tel:9733424134"
      className="fixed bottom-6 right-6 z-50 lg:hidden bg-primary text-navy w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse"
      aria-label="Call AG Restorations"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default MobileCallButton;
