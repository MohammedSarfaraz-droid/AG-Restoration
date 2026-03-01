import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Roofing", path: "/roofing" },
  { label: "Commercial", path: "/commercial-roofing" },
  { label: "Remodeling", path: "/remodeling" },
  { label: "About", path: "/about" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-steel/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-heading text-navy font-bold text-xl">AG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-white text-xl tracking-wider uppercase">AG Restorations</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-silver/80 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9733424134" className="text-silver/80 hover:text-primary transition-colors text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              973-342-4134
            </a>
            <Link to="/contact">
              <Button className="bg-primary text-navy font-heading uppercase tracking-wider hover:bg-primary/90 animate-glow-pulse">
                Get Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-silver p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden pb-6 border-t border-steel/30 pt-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-silver/80 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary text-navy font-heading uppercase tracking-wider">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
